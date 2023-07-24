'use client'

import './globals.css'

import { CSSReset, ChakraProvider } from '@chakra-ui/react';

import { theme } from '@/theme';
import { Providers } from '@/redux/Providers';

import Footer from '@/component/Footer';
import MetaTags from '@/component/head/Metadata';
import Notification from '@/component/atom/alerts/toast';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <MetaTags />
      </head>
      <body>
        <main>
          <Providers>
            <ChakraProvider theme={theme}>
              <CSSReset />
              {children}
              <Footer />
              <Notification />
            </ChakraProvider>
          </Providers>
        </main>
        {/* Scripts */}
      </body>
    </html>
  );
}

// @note this layout is shared across all pages