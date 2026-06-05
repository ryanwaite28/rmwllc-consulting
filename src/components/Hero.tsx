export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/15 border border-blue-500/30 text-blue-400 text-sm font-medium mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          Available for new engagements
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-4xl">
          AI-Augmented Engineering
          <br />
          <span className="text-blue-400">for the Modern Enterprise</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Ryan M. Waite — Systems Architect &amp; Software Engineer with 10+ years building
          production systems at Capital One and FINRA. Specializing in AI-assisted development,
          AWS cloud architecture, and full-stack engineering that ships faster.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg text-base"
          >
            View Services
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-lg text-base"
          >
            Start a Project
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-slate-800 pt-12">
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '3×', label: 'AWS Certified' },
            { value: 'F500', label: 'Enterprise Clients' },
            { value: 'AI-First', label: 'Dev Methodology' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-bold text-white mb-1">{value}</div>
              <div className="text-slate-500 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
