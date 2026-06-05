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
                  href="mailto:ryanmyronwaite.llc@gmail.com"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  ryanmyronwaite.llc@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ryanwaite28/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
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
