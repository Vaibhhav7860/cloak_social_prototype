import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://cloaksocial.com'),
  title: {
    default: 'CloakSocial - Protect Photos from AI Facial Recognition',
    template: '%s | CloakSocial',
  },
  description: 'Immunize your photos against AI surveillance, facial recognition, and deepfake technology. Invisible protection that confuses AI while looking perfect to humans.',
  keywords: [
    'AI photo protection',
    'facial recognition blocker',
    'deepfake protection',
    'photo privacy',
    'image immunization',
    'adversarial perturbation',
    'privacy tool',
    'anti-AI surveillance',
    'photo security',
    'family photo protection'
  ],
  authors: [{ name: 'CloakSocial' }],
  creator: 'CloakSocial',
  publisher: 'CloakSocial',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cloaksocial.com',
    siteName: 'CloakSocial',
    title: 'CloakSocial - Invisible AI Photo Protection',
    description: 'Protect your family photos from AI facial recognition and deepfakes. Invisible to humans, impenetrable to AI.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'CloakSocial - Photo Protection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloakSocial - Invisible AI Photo Protection',
    description: 'Protect your family photos from AI facial recognition and deepfakes.',
    images: ['/og-image.svg'],
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
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://cloaksocial.com',
  },
};

export const viewport = {
  themeColor: '#050508',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
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
