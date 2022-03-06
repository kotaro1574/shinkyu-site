import { Box, Text } from '@chakra-ui/react'
import { Footer } from '@src/components/ui/Footer'
import { Header } from '@src/components/ui/Header'
import type { NextPageWithLayout } from 'next'

const Home: NextPageWithLayout = () => {
  return <Text>こたろ！！！！</Text>
}

Home.getLayout = (page) => (
  <>
    <Header />
    <Box>{page}</Box>
    <Footer />
  </>
)

export default Home
