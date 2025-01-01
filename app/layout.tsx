import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import logo from '@/app/assets/companylogo.jpeg';
// Make sure this is imported from 'next'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cyber.ix - Transform Your Digital Vision',
  description: 'We specialize in creating innovative digital solutions that help businesses thrive in the modern world.',
  keywords: 'web development, mobile apps, software solutions, digital transformation, IT consulting',
  authors: [{ name: 'Cyber.ix' }],
  openGraph: {
    title: 'Cyber.ix - Transform Your Digital Vision',
    description: 'We specialize in creating innovative digital solutions that help businesses thrive in the modern world.',
    url: 'https://cyber.ix.com',
    siteName: 'Cyber.ix',
    images: [
      {
        url: "/companylogo.jpeg", 
        width: 1200,
        height: 630,
        alt: 'Cyber.ix'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cyber.ix - Transform Your Digital Vision',
    description: 'We specialize in creating innovative digital solutions that help businesses thrive in the modern world.',
    images: ['/companylogo.png'],
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
    icon: '/companylogo.png', 
    apple: '/companylogo.png',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}