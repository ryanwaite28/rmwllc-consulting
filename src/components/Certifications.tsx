import Image from 'next/image'

const certs = [
  {
    title: 'AWS Solutions Architect',
    subtitle: 'Associate',
    issuer: 'Amazon Web Services',
    date: 'March 2025 · Expires March 2028',
    image: '/architect.aws.png',
    credly: 'https://www.credly.com/badges/417801a1-e813-4733-bf84-05b0b714af0d',
    description:
      'Designing distributed systems on AWS — compute, storage, database, networking, and high-availability patterns.',
  },
  {
    title: 'AWS Certified Developer',
    subtitle: 'Associate',
    issuer: 'Amazon Web Services',
    date: 'June 2025',
    image: '/developer.aws.png',
    credly: 'https://www.credly.com/badges/a6ad1896-0b57-4fe6-adcc-742dea679250',
    description:
      'Development and deployment of cloud-native applications using AWS developer tools, SDKs, and CI/CD services.',
  },
  {
    title: 'AWS SysOps Admin',
    subtitle: 'Associate',
    issuer: 'Amazon Web Services',
    date: 'August 2025',
    image: '/sysops.aws.png',
    credly: 'https://www.credly.com/badges/db1ba20d-4ea4-45ac-a199-d6637e9a9695',
    description:
      'Operations, monitoring, automation, and management of AWS environments at enterprise scale.',
  },
]

const aiSkills = [
  'Claude Code (daily driver)',
  'Spec Driven Development (SDD)',
  'Prompt Engineering',
  'Context Architecture',
  'Multi-Agent Decomposition',
  'AI Output Evaluation & QA',
  'Token Economics & Cost Modeling',
  'AI-Augmented Code Review',
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Credentials</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Three AWS Associate certifications earned in 2025, verified on Credly. Click any card
            to view the official badge.
          </p>
        </div>

        {/* AWS Cert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {certs.map((c) => (
            <a
              key={c.title}
              href={c.credly}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 block"
            >
              {/* Cert card image */}
              <div className="relative w-full aspect-video bg-slate-700 overflow-hidden">
                <Image
                  src={c.image}
                  alt={`${c.title} ${c.subtitle} certification`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-white font-bold text-base leading-tight">
                      {c.title}
                    </h3>
                    <div className="text-blue-400 font-medium text-sm">{c.subtitle}</div>
                  </div>
                  {/* Verify arrow */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600/20 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
                <div className="text-slate-500 text-xs mb-3">
                  {c.issuer} · {c.date}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{c.description}</p>
                <div className="mt-4 text-xs font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                  Verify on Credly →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* AI Operations callout */}
        <div className="bg-blue-600/10 border border-blue-500/25 rounded-2xl p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">AI Operations Expertise</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Beyond certifications: practical AI operations skills developed through daily use in
                a Fortune 500 engineering environment. These are production capabilities — not
                theoretical.
              </p>
              <div className="flex flex-wrap gap-2">
                {aiSkills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-full text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
