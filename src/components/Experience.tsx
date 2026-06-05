const experiences = [
  {
    company: 'Capital One',
    abbr: 'C1',
    role: 'Principal Associate, Software Engineer',
    location: 'McLean, VA',
    period: 'April 2024 – Present',
    team: 'Finance Services Tech',
    accentClass: 'bg-blue-600 text-white',
    dotClass: 'bg-blue-500',
    highlights: [
      'Architected event-driven system replacing scheduled EventBridge jobs, accelerating client product activations',
      'Designed unified Kafka schema enabling multiple consumer services to filter and react to specific events',
      'Improved Docker-first development standards — defined scripts and patterns adopted across the team',
      'Led modernization of customer-facing portal, owning database and API design end-to-end',
      'Built SolidJS + Spring Boot internal application to migrate off Salesforce for product intent tracking',
      'Primary escalation lead — main point of contact for all dependent engineering teams',
      'Contributed AI adoption patterns to enterprise repository; presented at IC meetings with tech managers',
    ],
    tech: ['Python', 'AWS', 'SolidJS', 'Spring Boot', 'TypeScript', 'Docker', 'Claude Code', 'Kafka'],
  },
  {
    company: 'FINRA',
    abbr: 'FI',
    role: 'Staff Software Engineer',
    location: 'Rockville, MD',
    period: 'July 2019 – April 2024',
    team: 'DDWA · BrokerCheck · NGA',
    accentClass: 'bg-indigo-600 text-white',
    dotClass: 'bg-indigo-500',
    highlights: [
      'Assisted cloud migration of DDWA UI apps to cloud-native S3 + CloudFront, away from on-premises infrastructure',
      'Lead developer for DDWA UI — primary maintainer of internal and external regulatory applications',
      'Co-led rewrite of legacy AngularJS apps to Angular, cutting hosting costs significantly',
      'Led frontend modernization for NGA — full AngularJS-to-Angular rewrite with Scala backend updates',
      'Led CSRF security improvements across all UI applications to meet compliance standards',
    ],
    tech: ['AngularJS', 'Angular', 'Spring Boot', 'Python', 'Tailwind CSS', 'PostgreSQL', 'AWS', 'Scala', 'Docker', 'Jenkins'],
  },
  {
    company: 'Cloudistics',
    abbr: 'CL',
    role: 'Frontend Software Engineer',
    location: 'Reston, VA',
    period: 'November 2018 – July 2019',
    team: 'Private Cloud Infrastructure',
    accentClass: 'bg-violet-600 text-white',
    dotClass: 'bg-violet-500',
    highlights: [
      'Migrated AngularJS to Angular for client-facing portal supporting private cloud architecture',
      'Incorporated multi-language internationalization support across the application',
      'Extended portal functionality to provide on-premise-style UX for private cloud workflows',
    ],
    tech: ['AngularJS', 'Angular', 'TypeScript'],
  },
  {
    company: 'U.S. Dept. of Labor',
    abbr: 'DOL',
    role: 'Senior Web Developer',
    location: 'Herndon, VA',
    period: 'February 2016 – November 2018',
    team: 'Content Management for OSHA',
    accentClass: 'bg-slate-600 text-white',
    dotClass: 'bg-slate-500',
    highlights: [
      'Migrated OSHA public, intranet, and whistleblower sites from static HTML to Drupal CMS',
      'Defined Drupal content types to structure agency publications across regulatory categories',
    ],
    tech: ['Drupal', 'PHP', 'HTML', 'CSS'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Experience</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            10+ years building production systems at regulated financial institutions, government
            agencies, and enterprise tech companies.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-slate-200"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${exp.accentClass} flex items-center justify-center font-bold text-xs flex-shrink-0`}
                  >
                    {exp.abbr}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">{exp.company}</h3>
                    <div className="text-blue-600 font-semibold text-sm">{exp.role}</div>
                    <div className="text-slate-500 text-sm">
                      {exp.location} · {exp.team}
                    </div>
                  </div>
                </div>
                <span className="inline-block self-start sm:self-auto px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-medium whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${exp.dotClass} mt-2 flex-shrink-0`}
                    />
                    <span className="text-slate-600 text-sm leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
