import { AspectRatio, AspectRatioProps } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'

export const Logo = ({ ...props }: AspectRatioProps) => {
  return (
    <AspectRatio ratio={155 / 30} w={{ base: '255px', md: '355px' }} {...props}>
      <Image
        alt={'logo_image'}
        layout={'fill'}
        src={staticPath.images.logo_png}
      />
    </AspectRatio>
  )
}
