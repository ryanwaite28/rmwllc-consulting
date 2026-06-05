import { describe, it, expect } from 'vitest'
import { buildContactEmailHtml } from '@/lib/mailer'

const base = {
  name: 'Jane Smith',
  email: 'jane@example.com',
  company: 'Acme Corp',
  service: 'AI-Assisted Engineering',
  message: 'I need help with my project.',
}

describe('buildContactEmailHtml', () => {
  it('includes all contact fields in the output', () => {
    const html = buildContactEmailHtml(base)
    expect(html).toContain('Jane Smith')
    expect(html).toContain('jane@example.com')
    expect(html).toContain('Acme Corp')
    expect(html).toContain('AI-Assisted Engineering')
    expect(html).toContain('I need help with my project.')
  })

  it('escapes HTML special characters to prevent XSS', () => {
    const html = buildContactEmailHtml({
      ...base,
      name: '<script>alert(1)</script>',
      message: '<img src=x onerror="alert(1)">',
    })
    expect(html).not.toContain('<script>')
    expect(html).not.toContain('<img')
    expect(html).toContain('&lt;script&gt;')
    expect(html).toContain('&lt;img')
  })

  it('renders em dash for empty optional fields', () => {
    const html = buildContactEmailHtml({ ...base, company: '', service: '' })
    expect(html).toContain('—')
  })

  it('returns a non-empty string with valid HTML structure', () => {
    const html = buildContactEmailHtml(base)
    expect(typeof html).toBe('string')
    expect(html.length).toBeGreaterThan(100)
    expect(html).toContain('<!DOCTYPE html>')
    expect(html).toContain('</html>')
  })

  it('handles special characters in company and service fields', () => {
    const html = buildContactEmailHtml({
      ...base,
      company: 'Smith & Jones, LLC',
      service: 'DevOps & Infrastructure',
    })
    expect(html).toContain('Smith &amp; Jones, LLC')
    expect(html).toContain('DevOps &amp; Infrastructure')
  })
})
