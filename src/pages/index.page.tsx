import { Box, Button, Grid } from '@chakra-ui/react'
import { Content } from '@src/components/layouts/Content'
import { Header } from '@src/components/ui/Header'
import { HomeContent } from '@src/pages/content'
import type { NextPageWithLayout } from 'next'

const Home: NextPageWithLayout = () => {
  return <HomeContent />
}

Home.getLayout = (page) => {
  return (
    <Box maxW={'540px'}>
      <Header position={'sticky'} top={0} zIndex={'sticky'} />
      <Content>{page}</Content>
      <Grid
        bottom={0}
        maxW={'540px'}
        pos={'sticky'}
        templateColumns={'repeat(2, 1fr)'}
        w={'full'}
      >
        <Button bg={'#DBB025'} color={'white'} rounded={0} w={'full'}>
          電話で予約
        </Button>
        <Button bg={'green.500'} color={'white'} rounded={0} w={'full'}>
          Lineで予約
        </Button>
      </Grid>
    </Box>
  )
}

export default Home
