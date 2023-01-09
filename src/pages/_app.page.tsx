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
        {/*TODO: SEOの設定を決める*/}
        <DefaultSeo
          defaultTitle={'繁内鍼灸治療院'}
          description={'デフォルトの説明'}
          openGraph={{
            description: 'デフォルトの説明',
            images: [
              {
                alt: 'Og Image Alt',
                height: 600,
                type: 'image/jpeg',
                url: staticPath.images.mainVisual.slide_image_1_jpg,
                width: 800,
              },
            ],
            locale: 'ja_JP',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            site_name: '繁内鍼灸治療院',
            title: '繁内鍼灸治療院',
            type: 'website',
            url: 'http://localhost:3000/',
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
