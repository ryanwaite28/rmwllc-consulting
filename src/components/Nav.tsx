'use client'
import { useState } from 'react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#certifications', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-1">
            <span className="text-blue-400 font-bold text-xl tracking-tight">RMW</span>
            <span className="text-white font-semibold text-xl">LLC</span>
            <span className="hidden sm:inline text-slate-500 text-sm font-normal ml-2">
              Consulting
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-slate-400 hover:text-white p-2 rounded"
            aria-label="Toggle navigation"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center mt-3"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  )
}
