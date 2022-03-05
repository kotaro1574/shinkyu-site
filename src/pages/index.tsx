import { Footer } from '@src/components/ui/Footer'
import { Header } from '@src/components/ui/Header'
import type { NextPageWithLayout } from 'next'
import { Text } from '@chakra-ui/react'

const Home: NextPageWithLayout = () => {
  return <Text>こたろ！！！！</Text>
}

Home.getLayout = (page) => (
  <>
    <Header />
    <div>{page}</div>
    <Footer />
  </>
)

export default Home
