import './globals.css'
import { Inter, Trirong, Snippet, Work_Sans } from 'next/font/google'

import { MetaTags } from '@/component/head/Metadata';
import Footer from '@/component/Footer';

const inter = Inter({ subsets: ['latin'] })

const text = Work_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  preload: true,
  fallback: ['sans-serif'],
  subsets: ['latin', 'latin-ext']
});
const heading = Snippet({
  weight: '400',
  style: 'normal',
  preload: true,
  fallback: ['monospace'],
  subsets: ['latin']
});
const display = Trirong({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  preload: true,
  fallback: ['serif'],
  subsets: ['latin', 'latin-ext']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <MetaTags />
      </head>
      <body className={inter.className}>
        <main>
          {children}
          <Footer />
        </main>
        {/* Scripts */}
      </body>
    </html>
  );
}

// @note this layout is shared across all pages