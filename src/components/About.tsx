const techGroups = [
  {
    label: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL'],
  },
  {
    label: 'Cloud / AWS',
    items: ['Lambda', 'ECS', 'S3', 'EventBridge', 'API Gateway', 'Step Functions', 'CloudWatch', 'CloudFormation', 'Terraform', 'CDK'],
  },
  {
    label: 'Frameworks',
    items: ['Django', 'Flask', 'FastAPI', 'Node.js', 'NestJS', 'Express', 'Spring Boot', 'Angular', 'React', 'SolidJS', 'Prisma ORM'],
  },
  {
    label: 'Data & Infra',
    items: ['PostgreSQL', 'Redis', 'Kafka', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions'],
  },
  {
    label: 'AI Tooling',
    items: ['Claude Code', 'Windsurf', 'SDD / OpenSpec', 'Prompt Engineering'],
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: Bio */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">About</h2>

            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                I&apos;m Ryan Waite — a Systems Architect and Software Engineer with over a decade of
                experience building production systems in regulated, high-stakes environments. My career
                spans Capital One (fintech), FINRA (financial regulation), and federal agencies where
                reliability and correctness are non-negotiable.
              </p>
              <p>
                My current focus is{' '}
                <strong className="text-slate-900">AI-augmented engineering</strong> — using Claude
                Code and Spec Driven Development (SDD) to compress delivery timelines while improving
                specification precision, test coverage, and architectural coherence. This is a
                production methodology I use daily at Capital One, not a side experiment.
              </p>
              <p>
                I hold three AWS Associate certifications (Solutions Architect, Developer, SysOps
                Admin) and a Master of Science in Cloud Computing Systems. I bring the same rigor to
                client engagements that Fortune 500 financial institutions demand.
              </p>
              <p>
                Whether you need a cloud migration roadmap, a new system architected from scratch, or
                a team enabled to ship faster with AI tooling — I can help you get there.
              </p>
            </div>

            {/* Education */}
            <div className="mt-10 space-y-4">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                Education
              </h3>
              {[
                {
                  degree: 'MS',
                  title: 'Master of Science, Cloud Computing Systems',
                  school: 'University of Maryland Global Campus',
                  period: '2023–2024',
                  color: 'bg-blue-600',
                },
                {
                  degree: 'BS',
                  title: 'Bachelor of Science, Computer Science',
                  school: 'University of Maryland Global Campus',
                  period: '2020–2021',
                  color: 'bg-slate-700',
                },
              ].map((ed) => (
                <div key={ed.degree} className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-xl ${ed.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}
                  >
                    {ed.degree}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{ed.title}</div>
                    <div className="text-slate-500 text-sm">
                      {ed.school} · {ed.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl"
              >
                Work with Me
              </a>
              <a
                href="mailto:ryanwaite28@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-900 font-semibold rounded-xl"
              >
                ryanwaite28@gmail.com
              </a>
            </div>
          </div>

          {/* Right: Tech stack */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
              Technology Stack
            </h3>
            <div className="space-y-6">
              {techGroups.map((g) => (
                <div key={g.label}>
                  <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                    {g.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
