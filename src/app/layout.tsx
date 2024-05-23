'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { OverviewHeightProvider } from '@src/provider/overViewHeight'
import { theme } from '@src/lib/chakra/theme'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <OverviewHeightProvider>{children}</OverviewHeightProvider>
        </ChakraProvider>
      </body>
    </html>
  )
}
