const projects = [
  {
    name: 'Duseum',
    tagline: 'Serverless Digital Museum Platform',
    description:
      'A production-grade online museum where artists publish work and audiences discover and support creators directly. Built with a dual-profile model (Viewer + Author), a layered subscription system, Stripe Billing + Connect Express, and CloudFront signed URLs for private media delivery.',
    liveUrl: 'https://duseum.com',
    devUrl: 'https://dev.duseum.com',
    githubUrl: 'https://github.com/ryanwaite28/ai-projects-duseum',
    accentClass: 'border-violet-500/40 hover:border-violet-400/60',
    badgeClass: 'bg-violet-600/15 text-violet-300 border-violet-500/25',
    dotClass: 'bg-violet-500',
    highlights: [
      '11 independent Lambda functions — zero always-on compute',
      'AWS CDK TypeScript across 7 stacks (Storage, Auth, CDN, Messaging, API, Monitoring, Networking)',
      'DynamoDB single-table design with 7 GSIs and explicit access patterns',
      'Amazon Cognito with Google OAuth federation and JWT rotation',
      'CloudFront signed URLs — private art served via time-limited tokens, never in the browser',
      'Stripe Billing, Connect Express, and idempotent webhook processing via SQS',
      'Async notification fan-out: publish → SQS → SES emails in batches of 50',
      'React 18 + Vite SPA with TanStack Query, Zustand, and custom design system',
    ],
    tech: [
      'TypeScript', 'Node.js 20', 'AWS CDK', 'Lambda', 'DynamoDB',
      'Cognito', 'CloudFront', 'S3', 'SQS', 'SES', 'EventBridge',
      'Stripe', 'React 18', 'Vite', 'Tailwind CSS', 'Turborepo',
    ],
    methodology: 'Built end-to-end with Claude Code using Spec-Driven Development (SDD).',
  },
  {
    name: 'PixiCred',
    tagline: 'Serverless Credit Card Lending Platform',
    description:
      'A full-featured serverless credit card lending platform with an Angular SPA frontend and a TypeScript Lambda backend. Implements card issuance, credit-check pipelines, statement generation, billing lifecycle management, and JWT-authenticated APIs — all on AWS with zero always-on infrastructure.',
    liveUrl: 'https://pixicred.com',
    devUrl: 'https://dev.pixicred.com',
    githubUrl: 'https://github.com/ryanwaite28/ai-projects-pixicred',
    accentClass: 'border-blue-500/40 hover:border-blue-400/60',
    badgeClass: 'bg-blue-600/15 text-blue-300 border-blue-500/25',
    dotClass: 'bg-blue-500',
    highlights: [
      'API Gateway v2 → API Lambda (dispatch only) → Service Lambda (all business logic)',
      'SNS → SQS → Consumer Lambdas for credit-check, notification, statement-gen, and billing',
      'PostgreSQL via Prisma ORM with RDS IAM authentication (no static DB passwords)',
      'Angular SPA served via CloudFront + S3',
      'Full Terraform IaC across dev and prod environments, isolated by name prefix',
      'GitHub Actions CI/CD with manual approval gate before production deploy',
      'Testcontainers-based integration tests against a real Postgres instance',
    ],
    tech: [
      'TypeScript', 'Node.js 20', 'Lambda', 'API Gateway', 'SNS', 'SQS',
      'PostgreSQL', 'Prisma ORM', 'RDS', 'Angular', 'CloudFront', 'S3',
      'Terraform', 'Secrets Manager', 'GitHub Actions',
    ],
    methodology: 'Built end-to-end with Claude Code using Spec-Driven Development (SDD).',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Portfolio</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Production-grade projects built end-to-end — from database schema to CI/CD pipeline —
            using Claude Code and Spec-Driven Development. Both are live and publicly accessible.
          </p>
        </div>

        {/* Methodology callout */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium mb-12">
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
          All projects built with Claude Code + SDD methodology
        </div>

        <div className="space-y-8">
          {projects.map((p) => (
            <div
              key={p.name}
              className={`bg-white rounded-2xl border-2 ${p.accentClass} p-8 sm:p-10 shadow-sm transition-all`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-bold text-slate-900">{p.name}</h3>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${p.badgeClass}`}
                    >
                      Live
                    </span>
                  </div>
                  <div className="text-slate-500 font-medium">{p.tagline}</div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 flex-shrink-0">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-700 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Site
                  </a>
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-300 hover:border-slate-500 text-slate-600 hover:text-slate-900 text-sm font-semibold rounded-lg transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-7">{p.description}</p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-7">
                {p.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${p.dotClass} mt-2 flex-shrink-0`} />
                    <span className="text-slate-600 text-sm leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Methodology note */}
              <div className="text-xs text-slate-400 italic">{p.methodology}</div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/ryanwaite28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 hover:border-slate-500 text-slate-600 hover:text-slate-900 font-semibold rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
