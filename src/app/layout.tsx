'use client'

import './globals.css'

import { MetaTags } from '@/component/head/Metadata';
import Footer from '@/component/Footer';
import { CSSReset, ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/theme';


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
      <body>
        <main>
          <ChakraProvider theme={theme}>
            <CSSReset />
            {children}
            <Footer />
          </ChakraProvider>
        </main>
        {/* Scripts */}
      </body>
    </html>
  );
}

// @note this layout is shared across all pages