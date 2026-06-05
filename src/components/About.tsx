import Image from 'next/image'

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
              <div className="space-y-4">
                {[
                  {
                    degree: 'MS',
                    title: 'Master of Science, Cloud Computing Systems',
                    school: 'University of Maryland Global Campus',
                    period: '2023–2024',
                    color: 'bg-blue-600',
                    image: '/masters.degree.jpg',
                  },
                  {
                    degree: 'BS',
                    title: 'Bachelor of Science, Computer Science',
                    school: 'University of Maryland Global Campus',
                    period: '2020–2021',
                    color: 'bg-slate-700',
                    image: '/bachelors.degree.jpg',
                  },
                ].map((ed) => (
                  <a
                    key={ed.degree}
                    href={ed.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    {/* Diploma thumbnail */}
                    <div className="relative w-16 h-12 rounded-lg overflow-hidden border border-slate-200 group-hover:border-blue-300 flex-shrink-0 transition-colors">
                      <Image
                        src={ed.image}
                        alt={`${ed.title} diploma`}
                        fill
                        className="object-cover object-top"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                        {ed.title}
                      </div>
                      <div className="text-slate-500 text-sm">
                        {ed.school} · {ed.period}
                      </div>
                      <div className="text-blue-500 text-xs mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        View diploma →
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 flex-wrap">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl"
              >
                Work with Me
              </a>
              <a
                href="https://www.linkedin.com/in/ryanwaite28/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center px-6 py-3 border border-slate-300 hover:border-blue-400 text-slate-600 hover:text-blue-600 font-semibold rounded-xl transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:ryanmyronwaite.llc@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-900 font-semibold rounded-xl"
              >
                ryanmyronwaite.llc@gmail.com
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
