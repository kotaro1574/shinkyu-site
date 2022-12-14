import { ChakraProvider } from '@chakra-ui/react'
import { ApplicationLayout } from '@src/components/layouts/ApplicationLayout'
import { theme } from '@src/lib/chakra/theme'
import type { AppPropsWithLayout } from 'next/app'
import { RecoilRoot } from 'recoil'

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </ChakraProvider>
    </RecoilRoot>
  )
}

export default MyApp
