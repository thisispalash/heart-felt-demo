'use client'

import './globals.css'

import { CSSReset, ChakraProvider, VStack } from '@chakra-ui/react';

import { theme } from '@/theme';
import { Providers } from '@/redux/Providers';

import Footer from '@/component/html/Footer';
import MetaTags from '@/component/html/Metadata';
import Notification from '@/component/atom/alerts/toast';
import Heart from '@/component/heart';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <MetaTags />
        <title>Heart Felt</title>
      </head>
      <body>
        <main>
          <Providers>
            <ChakraProvider theme={theme}>
              <CSSReset />
              <VStack
                h='100vh' 
                w='100vw'
                px={[6, 12, 24, 48]} 
                spacing={8}
              >
                {children}
                <Footer />
                <Notification />
              </VStack>
              <Heart />
            </ChakraProvider>
          </Providers>
        </main>
        {/* Scripts */}
      </body>
    </html>
  );
}

// @note this layout is shared across all pages
