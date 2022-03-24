import { ChakraProvider } from '@chakra-ui/react'
import { ApplicationLayout } from '@src/components/layouts/ApplicationLayout'
import { theme } from '@src/lib/chakra/theme'
import type { AppPropsWithLayout } from 'next/app'

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ChakraProvider theme={theme}>
      <ApplicationLayout>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </ApplicationLayout>
    </ChakraProvider>
  )
}

export default MyApp
