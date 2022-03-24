import { Box } from '@chakra-ui/react'
import { HomeContent } from '@src/pages/content'
import type { NextPageWithLayout } from 'next'

const Home: NextPageWithLayout = () => {
  return <HomeContent />
}

Home.getLayout = (page) => <Box>{page}</Box>

export default Home
