import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sswestcoast.com.au'),
  title: {
    default: 'SS West Coast - Professional Cleaning Services in Perth, WA',
    template: '%s | SS West Coast Cleaning Services'
  },
  description: 'Professional residential and commercial cleaning services in Perth, Western Australia. Expert home cleaning, office cleaning, carpet cleaning, window cleaning, and more. 15+ years experience serving Bentley and surrounding areas.',
  keywords: [
    'cleaning services Perth',
    'professional cleaners Bentley WA',
    'home cleaning services Perth',
    'office cleaning Perth',
    'carpet cleaning Perth',
    'window cleaning services',
    'residential cleaning Bentley',
    'commercial cleaning Perth',
    'deep cleaning services',
    'furniture cleaning Perth',
    'SS West Coast cleaning',
    'cleaners near Bentley'
  ],
  authors: [{ name: 'SS West Coast Cleaning Services' }],
  creator: 'SS West Coast',
  publisher: 'SS West Coast',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://sswestcoast.com.au',
    title: 'SS West Coast - Professional Cleaning Services in Perth, WA',
    description: 'Professional residential and commercial cleaning services in Perth. Expert cleaners with 15+ years experience. Home, office, carpet, and window cleaning in Bentley and surrounding suburbs.',
    siteName: 'SS West Coast Cleaning Services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SS West Coast Professional Cleaning Services Perth',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SS West Coast - Professional Cleaning Services Perth',
    description: 'Professional residential and commercial cleaning services in Perth, Western Australia. 15+ years experience.',
    images: ['/twitter-image.jpg'],
    creator: '@sswestcoast',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://sswestcoast.com.au" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#84cc16" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}