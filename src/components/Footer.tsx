const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#certifications', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span className="text-blue-400 font-bold text-xl">RMW</span>
              <span className="text-white font-semibold text-xl">LLC</span>
              <span className="text-slate-500 text-sm ml-1">Consulting</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              AI-Augmented Engineering &amp; Cloud Architecture Consulting. Gaithersburg, MD.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Navigation
            </div>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Get in Touch
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:ryanwaite28@gmail.com"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  ryanwaite28@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Start a Project →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-600 text-sm">
            © 2025 RMW LLC. All rights reserved.
          </div>
          <div className="text-slate-600 text-sm">
            rmwllc-consulting.com
          </div>
        </div>
      </div>
    </footer>
  )
}
