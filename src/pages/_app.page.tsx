import { Box, ChakraProvider } from '@chakra-ui/react'
import { theme } from '@src/lib/chakra/theme'
import type { AppPropsWithLayout } from 'next/app'

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ChakraProvider theme={theme}>
      <Box
        bg={'white'}
        boxShadow={'md'}
        display={'flex'}
        flexDirection={'column'}
        h={'full'}
        maxW={'540px'}
        mx={'auto'}
        w={'full'}
      >
        {getLayout(<Component {...pageProps} />, pageProps)}
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
