import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RMW LLC Consulting | AI-Augmented Engineering & Cloud Architecture',
  description:
    'Ryan M. Waite — Systems Architect & Software Engineer with 10+ years. Specializing in AI-assisted engineering, AWS cloud architecture, and full-stack development for enterprise teams.',
  keywords:
    'consulting, software engineering, AI, AWS, cloud architecture, TypeScript, Python, Claude Code',
  openGraph: {
    title: 'RMW LLC Consulting',
    description:
      'AI-Augmented Engineering & Cloud Architecture Consulting. 10+ years. 3× AWS Certified.',
    url: 'https://rmwllc-consulting.com',
    siteName: 'RMW LLC Consulting',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>{children}</body>
    </html>
  )
}
