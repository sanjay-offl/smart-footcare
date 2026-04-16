import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Smart Diabetic Foot Monitoring System',
  description: 'Advanced foot temperature monitoring for diabetic patients. Real-time alerts and health tracking.',
  keywords: ['diabetic', 'foot', 'monitoring', 'health', 'temperature', 'healthcare', 'medical'],
  authors: [{ name: 'Smart FootCare', url: 'https://smartfootcare.com' }],
  creator: 'Smart FootCare Team',
  publisher: 'Smart FootCare',
  formatDetection: {
    telephone: false,
    email: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://smartfootcare.com',
    siteName: 'Smart Diabetic Foot Monitoring System',
    title: 'Smart Diabetic Foot Monitoring System',
    description: 'Advanced foot temperature monitoring for diabetic patients',
    images: [
      {
        url: 'https://smartfootcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Smart Diabetic Foot Monitoring System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Diabetic Foot Monitoring System',
    description: 'Advanced foot temperature monitoring for diabetic patients',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="geo.placename" content="Global" />
        <meta name="geo.region" content="Global" />
        <link rel="canonical" href="https://smartfootcare.com" />
      </head>
      <body className="overflow-x-hidden bg-neutral-50 text-neutral-900 transition-colors duration-300 dark:bg-neutral-900 dark:text-neutral-50">
        {children}
      </body>
    </html>
  )
}
