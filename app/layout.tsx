import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kamal Wagle - Full-Stack Web Developer | MERN Stack Expert Nepal',
  description: 'Kamal Wagle is a Full-Stack Web Developer and BSc CSIT student from Surkhet, Nepal. Specializing in MERN Stack, Next.js, React, and payment integrations (Stripe, eSewa, Khalti). Building modern web applications and mobile apps.',
  keywords: [
    'Kamal Wagle',
    'Web developer in Surkhet',
    'MERN Stack developer Nepal',
    'Next.js full-stack portfolio',
    'CSIT student projects',
    'Full-stack developer Nepal',
    'React developer Surkhet',
    'Node.js developer Nepal'
  ],
  authors: [{ name: 'Kamal Wagle' }],
  creator: 'Kamal Wagle',
  publisher: 'Kamal Wagle',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kamalwagle.dev',
    title: 'Kamal Wagle - Full-Stack Web Developer | MERN Stack Expert Nepal',
    description: 'Full-Stack Web Developer and BSc CSIT student from Surkhet, Nepal. Specializing in MERN Stack, Next.js, React, and payment integrations.',
    siteName: 'Kamal Wagle Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kamal Wagle - Full-Stack Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kamal Wagle - Full-Stack Web Developer | MERN Stack Expert Nepal',
    description: 'Full-Stack Web Developer and BSc CSIT student from Surkhet, Nepal. Specializing in MERN Stack, Next.js, React, and payment integrations.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kamal Wagle",
              "jobTitle": "Full-Stack Web Developer",
              "description": "Full-Stack Web Developer and BSc CSIT student specializing in MERN Stack",
              "url": "https://kamalwagle.dev",
              "sameAs": [
                "https://github.com/kamalwagle",
                "https://linkedin.com/in/kamalwagle"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Surkhet",
                "addressCountry": "Nepal"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Mid-West University"
              },
              "knowsAbout": [
                "Next.js",
                "React",
                "MERN Stack",
                "TypeScript",
                "Node.js",
                "MongoDB",
                "Tailwind CSS"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
