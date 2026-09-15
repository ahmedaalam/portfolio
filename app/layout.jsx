import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
});

export const viewport = {
  themeColor: '#0f1115',
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://ahmedaalam.vercel.app/'),
  title: 'Ahmed Alam — Full Stack Developer',
  description:
    'Portfolio of Ahmed Alam — Full Stack Developer specializing in building high-performance, modern web applications and clean digital experiences.',
  keywords: [
    'Ahmed Alam',
    'Full Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'JavaScript',
    'Portfolio',
  ],
  authors: [{ name: 'Ahmed Alam' }],
  creator: 'Ahmed Alam',
  alternates: {
    canonical: 'https://ahmedaalam.vercel.app/',
  },
  icons: {
    icon: '/assets/favicon.svg',
    apple: '/assets/favicon.svg',
  },
  openGraph: {
    type: 'website',
    url: 'https://ahmedaalam.vercel.app/',
    title: 'Ahmed Alam — Full Stack Developer',
    description:
      'Crafting modern web experiences through clean code and thoughtful design.',
    siteName: 'Ahmed Alam Portfolio',
    images: [
      {
        url: '/assets/images/loopchat.png',
        width: 1200,
        height: 630,
        alt: 'Ahmed Alam Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Alam — Full Stack Developer',
    description:
      'Crafting modern web experiences through clean code and thoughtful design.',
    images: ['/assets/images/loopchat.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ahmed Alam',
  url: 'https://ahmedaalam.vercel.app/',
  jobTitle: 'Full Stack Developer',
  sameAs: [
    'https://github.com/ahmedaalam',
    'https://www.linkedin.com/in/ahmed-aalam/',
  ],
  knowsAbout: [
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Tailwind CSS',
    'Full Stack Development',
    'REST APIs',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
