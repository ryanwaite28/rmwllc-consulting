const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.402 2.798H4.2c-1.432 0-2.402-1.798-1.402-2.798L4.2 15.3" />
      </svg>
    ),
    title: 'AI-Assisted Engineering',
    description:
      'Compress delivery timelines 2–5× using Claude Code, Spec Driven Development (SDD), and AI workflow integration. I help teams adopt AI tooling in a structured, production-grade way — not as a novelty, but as a core methodology.',
    tags: ['Claude Code', 'SDD / OpenSpec', 'Prompt Engineering', 'AI Ops'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: 'AWS Cloud Architecture',
    description:
      'Design and implement scalable, cost-optimized AWS architectures: event-driven Lambda pipelines, ECS Fargate services, multi-AZ RDS, S3 data lakes, and full IaC via Terraform. Three AWS Associate certifications — Solutions Architect, Developer, SysOps.',
    tags: ['Lambda', 'ECS', 'Terraform', 'EventBridge', 'SQS/SNS', 'CDK'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Full-Stack Development',
    description:
      'End-to-end application development from API design to polished UI. Python backends (Django, Flask, FastAPI), TypeScript/Node.js services (NestJS, Express), and modern frontends (Angular, React, SolidJS). Spring Boot for JVM-stack teams.',
    tags: ['Python', 'TypeScript', 'Node.js', 'Angular', 'React', 'Spring Boot'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'DevOps & Infrastructure',
    description:
      'CI/CD pipeline design, Docker containerization, Kubernetes orchestration, and production observability. Proven patterns from Capital One and FINRA: zero-downtime deployments, secret management, structured logging, and alerting.',
    tags: ['Kubernetes', 'Docker', 'Jenkins', 'GitHub Actions', 'Prometheus'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: 'Data Engineering',
    description:
      'Production data pipelines in regulated financial environments. Python ETL pipelines, S3 data lakes, PostgreSQL schema design, event-driven data flows, and real-time stream processing with Kafka. Experience at FINRA where data correctness is a compliance requirement.',
    tags: ['Python', 'PostgreSQL', 'S3', 'Kafka', 'ETL', 'Spark'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Technical Leadership',
    description:
      'Architecture decision-making, AI adoption patterns, team mentorship, and cross-functional enablement. Experienced presenting engineering trade-offs to product and tech managers. I help teams build culture and practices that outlast any single project.',
    tags: ['Architecture Review', 'AI Adoption', 'Mentorship', 'Escalation Support'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Services</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Specialized engineering consulting for teams that need to build faster, architect
            smarter, and ship production-grade systems with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center text-blue-600 mb-5 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-5">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA band */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Not sure where to start?</h3>
            <p className="text-blue-100">
              Tell me about your project and I&apos;ll recommend the right engagement.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-white text-blue-600 hover:bg-blue-50 font-semibold px-7 py-3 rounded-xl transition-colors"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
