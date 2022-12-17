import { AspectRatio, Box } from '@chakra-ui/react'
import { Footer } from '@src/components/layouts/Footer/Footer'
import { Header } from '@src/components/layouts/Header/Header'
import { Image } from '@src/components/ui/Image'

export const HomeContent = () => {
  return (
    <Box>
      <Header />
      <AspectRatio h={'700px'} ratio={16 / 9}>
        <Image
          alt={'top_image'}
          layout={'fill'}
          src={'https://source.unsplash.com/random'}
        />
      </AspectRatio>
      <Box h={'300px'} />
      <Footer />
    </Box>
  )
}
