import { ChakraProvider } from '@chakra-ui/react'
import { staticPath } from '@src/lib/$path'
import { theme } from '@src/lib/chakra/theme'
import { OverviewHeightProvider } from '@src/provider/overViewHeight'
import type { AppPropsWithLayout } from 'next/app'
import { DefaultSeo } from 'next-seo'

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ChakraProvider theme={theme}>
      <OverviewHeightProvider>
        <DefaultSeo
          defaultTitle={'繁内鍼灸治療院'}
          description={
            '東広島市西条町に位置する繁内鍼灸治療院では、経験豊富で勉強熱心な院長のもと、伝統的な針や灸から整体、産後ケア、吸い玉まで幅広く対応。一人ひとりの健康を真心でサポートします。'
          }
          openGraph={{
            description:
              '東広島市西条町に位置する繁内鍼灸治療院では、経験豊富で勉強熱心な院長のもと、伝統的な針や灸から整体、産後ケア、吸い玉まで幅広く対応。一人ひとりの健康を真心でサポートします。',
            images: [
              {
                alt: 'Og Image Alt',
                height: 600,
                type: 'image/jpeg',
                url: staticPath.images.mainVisual2_jpg,
                width: 800,
              },
            ],
            locale: 'ja_JP',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            site_name: '繁内鍼灸治療院',
            title: '繁内鍼灸治療院',
            type: 'website',
            url: 'https://shinkyu-site.vercel.app/',
          }}
          twitter={{
            cardType: 'summary_large_image',
            handle: '@handle',
            site: '@site',
          }}
        />
        {getLayout(<Component {...pageProps} />, pageProps)}
      </OverviewHeightProvider>
    </ChakraProvider>
  )
}

export default MyApp
