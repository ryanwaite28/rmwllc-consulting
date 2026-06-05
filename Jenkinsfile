pipeline {

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
    K8S_NAMESPACE   = 'rmw-llc-consulting'
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
        sh 'git log --oneline -5'
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
            kubectl create namespace $K8S_NAMESPACE --dry-run=client -o yaml | kubectl apply -f -
            kubectl create secret docker-registry harbor-credentials \
              --docker-server=$HARBOR_REGISTRY \
              --docker-username=$HARBOR_USER \
              --docker-password=$HARBOR_PASS \
              --namespace=$K8S_NAMESPACE \
              --dry-run=client -o yaml | kubectl apply -f -
          '''
        }
      }
    }

    stage('Apply App Secret') {
      steps {
        withVault(
          configuration: [
            vaultUrl: 'https://vault.rmwhs.space',
            vaultCredentialId: 'vault-auth-token'
          ],
          vaultSecrets: [[
            path: 'kv/common-app-deploy-secrets',
            secretValues: [
              [envVar: 'MAILPIT_USER',     vaultKey: 'mailpit_user'],
              [envVar: 'MAILPIT_PASSWORD', vaultKey: 'mailpit_password']
            ]
          ]]
        ) {
          sh '''
            kubectl create secret generic $IMAGE_NAME-secret \
              --from-literal=SMTP_USER=$MAILPIT_USER \
              --from-literal=SMTP_PASSWORD=$MAILPIT_PASSWORD \
              --namespace=$K8S_NAMESPACE \
              --dry-run=client -o yaml | kubectl apply -f -
          '''
        }
      }
    }

    stage('Build & Push') {
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
            echo "$HARBOR_PASS" | docker login $HARBOR_REGISTRY -u $HARBOR_USER --password-stdin
            docker build -t $FULL_IMAGE -t $LATEST_IMAGE .
            docker push $FULL_IMAGE
            docker push $LATEST_IMAGE
          '''
        }
      }
    }

    stage('Deploy') {
      steps {
        sh '''
          kubectl apply -f k8s/namespace.yaml
          kubectl apply -f k8s/configmap.yaml  -n $K8S_NAMESPACE
          kubectl apply -f k8s/secret.yaml     -n $K8S_NAMESPACE
          kubectl apply -f k8s/deployment.yaml -n $K8S_NAMESPACE
          kubectl apply -f k8s/service.yaml    -n $K8S_NAMESPACE
          kubectl apply -f k8s/ingress.yaml    -n $K8S_NAMESPACE
          kubectl set image deployment/$IMAGE_NAME $IMAGE_NAME=$FULL_IMAGE -n $K8S_NAMESPACE
          kubectl rollout status deployment/$IMAGE_NAME -n $K8S_NAMESPACE --timeout=300s
        '''
      }
    }

  }

  post {
    success {
      echo "Deployed $FULL_IMAGE → https://rmwllc-consulting.com"
    }
    failure {
      echo "Pipeline failed."
    }
  }
}
