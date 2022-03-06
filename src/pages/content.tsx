import { AspectRatio, Box } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'

export const HomeContent = () => {
  return (
    <Box>
      <AspectRatio ratio={1440 / 900} w={'full'}>
        <Image
          alt={'スマート法律相談 SMART LEGAL ADVICE'}
          layout={'fill'}
          src={staticPath.images.top_image_svg}
        />
      </AspectRatio>
    </Box>
  )
}
