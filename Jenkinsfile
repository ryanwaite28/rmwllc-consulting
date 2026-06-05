pipeline {

  parameters {
    // ── Static analysis & security (skippable, default: run) ──────────────
    booleanParam(name: 'SKIP_SONAR',          defaultValue: false, description: 'Skip SonarQube static analysis scan')
    booleanParam(name: 'SKIP_QUALITY_GATE',   defaultValue: false, description: 'Skip SonarQube quality gate wait')
    booleanParam(name: 'SKIP_TRIVY',          defaultValue: false, description: 'Skip Trivy vulnerability scan')
    // ── Per-scope test parameters (skippable, default: run) ───────────────
    booleanParam(name: 'SKIP_UNIT_TESTS',     defaultValue: false, description: 'Skip unit tests in Docker build (debug only — never deploy)')
    // ── Deployment options ────────────────────────────────────────────────
    booleanParam(name: 'FORCE_REDEPLOY',      defaultValue: false, description: 'Force pod rollout even if the image tag did not change')
  }

  agent {
    kubernetes {
      namespace 'jenkins-agents'
      inheritFrom 'jenkins-agent'
      yaml """
apiVersion: v1
kind: Pod
spec:
  serviceAccountName: jenkins-agent
  imagePullSecrets:
  - name: harbor-credentials
  containers:
  - name: jenkins-agent
    image: harbor.rmwhs.space/devops/jenkins-agent-base:latest
    imagePullPolicy: Always
    command: [sleep]
    args: [infinity]
    tty: true
    env:
    - name: DOCKER_HOST
      value: tcp://localhost:2375
  - name: dind
    image: docker:24-dind
    securityContext:
      privileged: true
    args:
    - "--mtu=1400"
    env:
    - name: DOCKER_TLS_CERTDIR
      value: ""
"""
      defaultContainer 'jenkins-agent'
    }
  }

  environment {
    HARBOR_REGISTRY = 'harbor.rmwhs.space'
    HARBOR_PROJECT  = 'apps'
    IMAGE_NAME      = 'rmw-llc-consulting'
    IMAGE_TAG       = "${BUILD_NUMBER}"
    FULL_IMAGE      = "${HARBOR_REGISTRY}/${HARBOR_PROJECT}/${IMAGE_NAME}:${IMAGE_TAG}"
    LATEST_IMAGE    = "${HARBOR_REGISTRY}/${HARBOR_PROJECT}/${IMAGE_NAME}:latest"
    SONAR_PROJECT   = 'rmw-llc-consulting'
    K8S_NAMESPACE   = 'rmw-llc-consulting'
    TRIVY_SERVER    = 'http://trivy-server.security.svc.cluster.local:4954'
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
        sh 'git log --oneline -5'
      }
    }

    stage('Pre-flight Checks') {
      steps {
        sh '''
          kubectl version --client
          docker --version
          trivy --version
          sonar-scanner --version
        '''
      }
    }

    stage('Wait for Docker Daemon') {
      steps {
        sh '''
          echo "Waiting for Docker daemon..."
          timeout 60 sh -c 'until docker ps > /dev/null 2>&1; do sleep 2; done'
          echo "Docker daemon ready."
        '''
      }
    }

    stage('Prepare K8s Namespace & Registry Secret') {
      // Harbor credentials sourced from Vault kv/common-app-deploy-secrets — not Jenkins credentials.
      steps {
        withVault(
          configuration: [
            vaultUrl: 'https://vault.rmwhs.space',
            vaultCredentialId: 'vault-auth-token'
          ],
          vaultSecrets: [[
            path: 'kv/common-app-deploy-secrets',
            secretValues: [
              [envVar: 'HARBOR_USER', vaultKey: 'harbor_username'],
              [envVar: 'HARBOR_PASS', vaultKey: 'harbor_password']
            ]
          ]]
        ) {
          sh '''
            kubectl create namespace ${K8S_NAMESPACE} --dry-run=client -o yaml | kubectl apply -f -
            kubectl create secret docker-registry harbor-credentials \
              --docker-server=${HARBOR_REGISTRY} \
              --docker-username=${HARBOR_USER} \
              --docker-password=${HARBOR_PASS} \
              --namespace=${K8S_NAMESPACE} \
              --dry-run=client -o yaml | kubectl apply -f -
          '''
        }
      }
    }

    stage('Apply App Secret') {
      // This app has no per-app Vault secrets (no database, no app-specific credentials).
      // SMTP credentials come from kv/common-app-deploy-secrets (mailpit_user / mailpit_password).
      // Exception documented: no kv/rmw-llc-consulting Vault path required.
      steps {
        withVault(
          configuration: [
            vaultUrl: 'https://vault.rmwhs.space',
            vaultCredentialId: 'vault-auth-token'
          ],
          vaultSecrets: [[
            path: 'kv/common-app-deploy-secrets',
            secretValues: [
              [envVar: 'HARBOR_USER',      vaultKey: 'harbor_username'],
              [envVar: 'HARBOR_PASS',      vaultKey: 'harbor_password'],
              [envVar: 'OPENSEARCH_USER',  vaultKey: 'opensearch_username'],
              [envVar: 'OPENSEARCH_PASS',  vaultKey: 'opensearch_password'],
              [envVar: 'MAILPIT_USER',     vaultKey: 'mailpit_user'],
              [envVar: 'MAILPIT_PASSWORD', vaultKey: 'mailpit_password']
            ]
          ]]
        ) {
          sh '''
            kubectl create secret generic ${IMAGE_NAME}-secret \
              --from-literal=SMTP_USER=${MAILPIT_USER} \
              --from-literal=SMTP_PASSWORD=${MAILPIT_PASSWORD} \
              --namespace=${K8S_NAMESPACE} \
              --dry-run=client -o yaml | kubectl apply -f -
            kubectl create secret generic opensearch-credentials \
              --from-literal=user=${OPENSEARCH_USER} \
              --from-literal=password=${OPENSEARCH_PASS} \
              --namespace=${K8S_NAMESPACE} \
              --dry-run=client -o yaml | kubectl apply -f -
          '''
        }
      }
    }

    stage('SonarQube Scan') {
      when { expression { !params.SKIP_SONAR } }
      steps {
        withSonarQubeEnv('SonarQube') {
          sh '''
            sonar-scanner \
              -Dsonar.projectKey=${SONAR_PROJECT} \
              -Dsonar.projectName="${IMAGE_NAME}" \
              -Dsonar.sources=src \
              -Dsonar.exclusions=**/__pycache__/**,**/node_modules/**,**/tests/**,.next/**
          '''
        }
      }
    }

    stage('Quality Gate') {
      when { expression { !params.SKIP_SONAR && !params.SKIP_QUALITY_GATE } }
      steps {
        timeout(time: 5, unit: 'MINUTES') {
          waitForQualityGate abortPipeline: true
        }
      }
    }

    stage('Build & Login') {
      // Build and Deploy stages are NEVER skipped — they are the critical path.
      steps {
        withVault(
          configuration: [
            vaultUrl: 'https://vault.rmwhs.space',
            vaultCredentialId: 'vault-auth-token'
          ],
          vaultSecrets: [[
            path: 'kv/common-app-deploy-secrets',
            secretValues: [
              [envVar: 'HARBOR_USER', vaultKey: 'harbor_username'],
              [envVar: 'HARBOR_PASS', vaultKey: 'harbor_password']
            ]
          ]]
        ) {
          sh """
            echo "\${HARBOR_PASS}" | docker login \${HARBOR_REGISTRY} \\
              -u \${HARBOR_USER} --password-stdin
            docker build \\
              --build-arg SKIP_UNIT_TESTS=${params.SKIP_UNIT_TESTS} \\
              -t \${FULL_IMAGE} \\
              -t \${LATEST_IMAGE} \\
              .
          """
        }
      }
    }

    stage('Trivy Image Scan') {
      when { expression { !params.SKIP_TRIVY } }
      steps {
        sh '''
          trivy image \
            --server ${TRIVY_SERVER} \
            --exit-code 0 \
            --severity HIGH,CRITICAL \
            --no-progress \
            --format table \
            ${FULL_IMAGE}
        '''
      }
    }

    stage('Push to Harbor') {
      steps {
        sh '''
          docker push ${FULL_IMAGE}
          docker push ${LATEST_IMAGE}
        '''
      }
    }

    stage('Deploy to Kubernetes') {
      // Apply in dependency order: namespace → config → app
      steps {
        sh '''
          kubectl apply -f k8s/namespace.yaml
          kubectl apply -f k8s/configmap.yaml      -n ${K8S_NAMESPACE}
          kubectl apply -f k8s/secret.yaml         -n ${K8S_NAMESPACE}
          kubectl apply -f k8s/deployment.yaml     -n ${K8S_NAMESPACE}
          kubectl apply -f k8s/service.yaml        -n ${K8S_NAMESPACE}
          kubectl apply -f k8s/ingress.yaml        -n ${K8S_NAMESPACE}
          kubectl rollout status deployment/${IMAGE_NAME} \
            -n ${K8S_NAMESPACE} --timeout=300s
        '''
      }
    }

  }

  post {
    success {
      echo "Deployed ${FULL_IMAGE} to ${K8S_NAMESPACE} successfully. Site: https://rmwllc-consulting.com"
    }
    failure {
      echo "Pipeline failed. Check logs above for the failing stage."
    }
  }
}
