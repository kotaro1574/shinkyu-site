'use client'

import { GoogleAnalytics } from '@next/third-parties/google'
import { theme } from '@src/lib/chakra/theme'
import { ChakraProvider } from '@src/provider/ChakraProvider'
import { OverviewHeightProvider } from '@src/provider/overViewHeight'
import { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    '広島県東広島市西条町に位置する繁内鍼灸治療院では、経験豊富で勉強熱心な院長のもと、伝統的な針や灸から整体、産後ケア、吸い玉まで幅広く対応。一人ひとりの健康を真心でサポートします。',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    description:
      '広島県東広島市西条町に位置する繁内鍼灸治療院では、経験豊富で勉強熱心な院長のもと、伝統的な針や灸から整体、産後ケア、吸い玉まで幅広く対応。一人ひとりの健康を真心でサポートします。',
    images: [
      {
        height: '600',
        url: '/images/treatment-hari.jpg',
        width: '800',
      },
    ],
    locale: 'jp',
    siteName: '繁内鍼灸治療院',
    title: '繁内鍼灸治療院',
    type: 'website',
    url: 'https://www.shigeuchi.com/',
  },
  title: '繁内鍼灸治療院',
  twitter: {
    card: 'summary_large_image',
    description:
      '広島県東広島市西条町に位置する繁内鍼灸治療院では、経験豊富で勉強熱心な院長のもと、伝統的な針や灸から整体、産後ケア、吸い玉まで幅広く対応。一人ひとりの健康を真心でサポートします。',
    images: [
      {
        height: '600',
        url: '/images/treatment-hari.jpg',
        width: '800',
      },
    ],
    title: '繁内鍼灸治療院',
  },
}

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
