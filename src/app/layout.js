import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://cloaksocial.com'),
  title: {
    default: 'CloakSocial - Protect Your Photos from AI Surveillance',
    template: '%s | CloakSocial',
  },
  description: 'Immunize your personal photos against AI facial recognition and deepfake technology. Invisible protection that keeps your family safe online.',
  keywords: ['photo protection', 'AI privacy', 'facial recognition', 'deepfake protection', 'image security', 'photo immunization'],
  authors: [{ name: 'CloakSocial' }],
  creator: 'CloakSocial',
  publisher: 'CloakSocial',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cloaksocial.com',
    siteName: 'CloakSocial',
    title: 'CloakSocial - Protect Your Photos from AI Surveillance',
    description: 'Immunize your personal photos against AI facial recognition. Invisible protection for your family.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'CloakSocial - AI Photo Protection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloakSocial - Protect Your Photos from AI',
    description: 'Immunize your photos against AI facial recognition and deepfakes.',
    images: ['/og-image.svg'],
    creator: '@cloaksocial',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
