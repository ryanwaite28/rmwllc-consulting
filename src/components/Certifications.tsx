const certs = [
  {
    title: 'AWS Solutions Architect',
    subtitle: 'Associate',
    issuer: 'Amazon Web Services',
    date: 'March 2025',
    badgeColor: 'from-orange-500 to-amber-500',
    description:
      'Designing distributed systems on AWS — compute, storage, database, networking, and high-availability patterns.',
  },
  {
    title: 'AWS Certified Developer',
    subtitle: 'Associate',
    issuer: 'Amazon Web Services',
    date: 'June 2025',
    badgeColor: 'from-yellow-500 to-orange-400',
    description:
      'Development and deployment of cloud-native applications using AWS developer tools, SDKs, and CI/CD services.',
  },
  {
    title: 'AWS SysOps Admin',
    subtitle: 'Associate',
    issuer: 'Amazon Web Services',
    date: 'August 2025',
    badgeColor: 'from-amber-600 to-yellow-500',
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
            Three AWS Associate certifications earned in 2025, alongside hands-on AI operations
            expertise used in production at Capital One.
          </p>
        </div>

        {/* AWS Certs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {certs.map((c) => (
            <div
              key={c.title}
              className="bg-slate-800 rounded-2xl p-7 border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${c.badgeColor} flex items-center justify-center mb-5`}
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-base leading-tight">
                {c.title}
                <br />
                <span className="text-slate-400 font-normal text-sm">{c.subtitle}</span>
              </h3>
              <div className="text-slate-500 text-sm mt-1 mb-4">
                {c.issuer} · {c.date}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{c.description}</p>
            </div>
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
