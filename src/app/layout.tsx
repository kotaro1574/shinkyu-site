'use client'

import { ChakraProvider } from '@chakra-ui/react'
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
    </html>
  )
}
