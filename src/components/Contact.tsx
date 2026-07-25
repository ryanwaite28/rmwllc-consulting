'use client'
import { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgobvjge'

const CONTACT_EMAIL = 'ryanmyronwaite.llc@gmail.com'

const serviceOptions = [
  'Architectural & AI-Speed Audit (one-time)',
  'Async Advisory Retainer',
  'Embedded Systems Architect Retainer',
  'AI Dev Workflows / Spec-Driven Development',
  'Cloud Migration & Cost Optimization',
  'System Scalability & Event-Driven Architecture',
  "Not sure yet — let's talk",
]

type FormState = {
  name: string
  email: string
  company: string
  service: string
  message: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
      setForm({ name: '', email: '', company: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left column */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Ready to Modernize Your Technical Stack?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10">
              Schedule a 20-minute discovery call to discuss your architecture challenge or book
              an initial Tech Audit. I respond within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: 'Email',
                  value: CONTACT_EMAIL,
                  href: `mailto:${CONTACT_EMAIL}`,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                  label: 'Location',
                  value: 'Gaithersburg, MD (remote-first)',
                  href: null,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: 'Response Time',
                  value: 'Within 24 hours',
                  href: null,
                },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{label}</div>
                    {href ? (
                      <a href={href} className="text-blue-600 hover:text-blue-500 text-sm">
                        {value}
                      </a>
                    ) : (
                      <div className="text-slate-600 text-sm">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="h-full flex items-center justify-center">
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center max-w-md w-full">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent</h3>
                  <p className="text-slate-600 mb-6">
                    Thanks for reaching out. I&apos;ll be in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 bg-slate-900 hover:bg-slate-700 text-white rounded-lg font-semibold text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp (optional)"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Current Technical Challenge
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    <option value="">Select an area...</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, the problem you're solving, and what kind of help you need..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                  />
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 text-sm">
                    Something went wrong. Please try again or email me directly at{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Book a Discovery Call
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
