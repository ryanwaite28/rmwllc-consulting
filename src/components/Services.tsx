const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.402 2.798H4.2c-1.432 0-2.402-1.798-1.402-2.798L4.2 15.3" />
      </svg>
    ),
    title: 'AI Operations & Spec-Driven Development',
    description:
      'We help your engineering team adopt AI-assisted dev workflows (Claude Code, OpenSpec) safely—establishing context architecture and token cost economics without sacrificing code quality or security.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: 'Cloud Modernization & Cost Optimization',
    description:
      'We untangle legacy technical debt, migrate monoliths to cloud-native and serverless architectures, and optimize AWS infrastructure spend so you pay for scale—not idle capacity.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: 'Event-Driven & Scalable Backends',
    description:
      'We design decoupled, event-driven streaming pipelines (Kafka, EventBridge, Lambda) that allow your platform to scale reliably as user volume grows—built from experience at Capital One and FINRA.',
  },
]

const tiers = [
  {
    name: 'Architectural & AI-Speed Audit',
    badge: 'Tier 1 — Entry Point',
    price: '$500 – $1,000',
    frequency: 'one-time · 1–2 week delivery',
    target: 'Teams needing immediate clarity on technical debt, cloud overspend, or AI integration readiness.',
    deliverables: [
      'Deep-dive codebase & infrastructure review',
      'Spec-Driven Development roadmap',
      'Cloud cost & security findings report',
      '90-minute executive debrief call',
    ],
    highlight: false,
  },
  {
    name: 'Asynchronous Advisory Retainer',
    badge: 'Tier 2 — Light Fractional',
    price: 'Starting at $1,500',
    frequency: 'per month',
    target: 'Growing teams that need senior architectural oversight without calendar bloat.',
    deliverables: [
      'Async architecture reviews (PRDs, specs, RFC sign-offs)',
      'PRD-to-AI context mapping & SDD guardrails',
      'Weekly written technical feedback',
      'Dedicated Slack channel access',
    ],
    highlight: true,
  },
  {
    name: 'Software Engineer & Systems Architect',
    badge: 'Tier 3 — Heavy Fractional',
    price: 'Starting at $2,500',
    frequency: 'per month · ~20 hrs/week',
    target: 'High-growth scale-ups executing MVPs or scaling existing solutions',
    deliverables: [
      'Direct architectural direction & system design',
      'CI/CD pipeline & SDD guardrail setup',
      'Full end to end development, deployment, & monitoring'
    ],
    highlight: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Value Pillars */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Engineering Teams Partner With RMW LLC
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Enterprise-grade architecture built on regulated financial and government environments —
            Capital One, FINRA, U.S. Dept. of Labor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center text-blue-600 mb-5 transition-colors">
                {p.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-3">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{p.description}</p>
            </div>
          ))}
        </div>

        {/* Engagement Models / Pricing Tiers */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Engagement Models</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Outcome-based retainers and fixed-scope packages — no hourly tracking, no micromanagement.
            Every engagement is scoped around your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-7 border flex flex-col transition-all ${
                t.highlight
                  ? 'bg-blue-600 border-blue-500 shadow-xl shadow-blue-600/20'
                  : 'bg-white border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md'
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${t.highlight ? 'text-blue-200' : 'text-blue-600'}`}>
                {t.badge}
              </div>
              <h3 className={`text-lg font-bold mb-1 ${t.highlight ? 'text-white' : 'text-slate-900'}`}>
                {t.name}
              </h3>
              <div className={`text-2xl font-bold mb-0.5 ${t.highlight ? 'text-white' : 'text-slate-900'}`}>
                {t.price}
              </div>
              <div className={`text-sm mb-5 ${t.highlight ? 'text-blue-200' : 'text-slate-500'}`}>
                {t.frequency}
              </div>
              <p className={`text-sm leading-relaxed mb-6 ${t.highlight ? 'text-blue-100' : 'text-slate-600'}`}>
                {t.target}
              </p>
              <ul className="space-y-2.5 mt-auto">
                {t.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${t.highlight ? 'text-blue-200' : 'text-blue-500'}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${t.highlight ? 'text-blue-50' : 'text-slate-700'}`}>{d}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-colors ${
                  t.highlight
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-500'
                }`}
              >
                Book a Discovery Call
              </a>
            </div>
          ))}
        </div>

        {/* Async-First Delivery Model */}
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-10 mb-16">
          <div className="max-w-3xl">
            <h3 className="text-xl font-bold text-white mb-3">
              An Async-First, High-Impact Delivery Model
            </h3>
            <p className="text-slate-400 leading-relaxed">
              RMW LLC integrates seamlessly into your existing workflows — GitHub, Jira, and Slack —
              to drive high-value architectural decisions and establish AI development standards.
              By operating async-first, we deliver principal-level speed and clarity without clogging
              your team&apos;s calendar with daily standups or endless meetings. Engagements are
              scoped around deliverables, not hours.
            </p>
          </div>
        </div>

        {/* CTA band */}
        <div className="bg-blue-600 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Not sure which tier fits?</h3>
            <p className="text-blue-100">
              Start with a 20-minute discovery call — no commitment required.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-white text-blue-600 hover:bg-blue-50 font-semibold px-7 py-3 rounded-xl transition-colors"
          >
            Book a Discovery Call
          </a>
        </div>

      </div>
    </section>
  )
}
