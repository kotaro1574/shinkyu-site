import { AspectRatio } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'

export const Logo = () => {
  return (
    <AspectRatio ratio={155 / 30} w={'355px'}>
      <Image
        alt={'logo_image'}
        layout={'fill'}
        src={staticPath.images.logo_png}
      />
    </AspectRatio>
  )
}
