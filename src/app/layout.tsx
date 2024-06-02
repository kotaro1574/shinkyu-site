'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { GoogleAnalytics } from '@next/third-parties/google'
import { theme } from '@src/lib/chakra/theme'
import { OverviewHeightProvider } from '@src/provider/overViewHeight'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={'en'}>
      <body>
        <ChakraProvider theme={theme}>
          <OverviewHeightProvider>{children}</OverviewHeightProvider>
        </ChakraProvider>
      </body>
      {/* google analytics */}
      <GoogleAnalytics gaId={'G-99HLQ1RB0J'} />
    </html>
  )
}
