import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@src/lib/chakra/theme'
import { OverviewHeightProvider } from '@src/provider/overViewHeight'
import type { AppPropsWithLayout } from 'next/app'

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ChakraProvider theme={theme}>
      <OverviewHeightProvider>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </OverviewHeightProvider>
    </ChakraProvider>
  )
}

export default MyApp
