import Image from 'next/image'
import Icon from '../../public/icon-1.jpg'


export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="lg:col-span-3">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/15 border border-blue-500/30 text-blue-400 text-sm font-medium mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Available for new engagements
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Fractional Systems Architecture
              <br />
              <span className="text-blue-400">&amp; AI Operations</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
              Helping B2B SaaS and Fintech scale-ups modernize legacy infrastructure, implement
              Spec-Driven Development, and accelerate delivery — without the overhead of a
              full-time executive hire.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg text-base"
              >
                Book an Architecture Audit
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-lg text-base"
              >
                View Engagement Models
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-slate-800 pt-10">
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

          {/* Right: Professional headshot */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              {/* Decorative background glow */}
              <div className="absolute inset-0 rounded-2xl bg-blue-600/20 blur-3xl scale-110 -z-10" />

              {/* Photo frame */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-[340px] lg:h-[420px] rounded-2xl overflow-hidden border border-blue-500/25 shadow-2xl">
                <Image
                  src={Icon}
                  alt="Ryan M. Waite — Systems Architect & Software Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 340px"
                />
                {/* Subtle gradient overlay at bottom for name card */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <div className="text-white font-semibold text-sm">Ryan M. Waite</div>
                  <div className="text-blue-300 text-xs">Systems Architect &amp; Software Engineer</div>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-blue-500/50 rounded-tr-lg" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-blue-500/50 rounded-bl-lg" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
