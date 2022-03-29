import { AspectRatio, Box } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'

export const TopImage = () => (
  <Box position={'relative'}>
    <AspectRatio ratio={625 / 425} w={'full'}>
      <Image
        alt={'top_image'}
        layout={'fill'}
        src={staticPath.images.TopSlider.AdobeStock_213691742_Preview_jpeg}
      />
    </AspectRatio>
    <AspectRatio
      left={'50%'}
      m={'auto'}
      position={'absolute'}
      ratio={300 / 75}
      top={'50%'}
      transform={'translateY(-50%) translateX(-50%)'}
      w={'300px'}
      zIndex={999}
    >
      <Image
        alt={'top_title'}
        layout={'fill'}
        src={staticPath.images.top_image_title_svg}
      />
    </AspectRatio>
  </Box>
)
