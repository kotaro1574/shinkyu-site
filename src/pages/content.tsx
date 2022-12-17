import { AspectRatio, Box } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'

export const HomeContent = () => {
  return (
    <Box>
      <AspectRatio h={'700px'} ratio={16 / 9}>
        <Image
          alt={'top_image'}
          layout={'fill'}
          src={'https://source.unsplash.com/random'}
        />
      </AspectRatio>
      <Box h={'300px'} />
    </Box>
  )
}
