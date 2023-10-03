import { AspectRatio, AspectRatioProps } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'

type Props = {
  type?: 'black' | 'white'
} & AspectRatioProps

export const Logo = ({ type = 'black', ...props }: Props) => {
  const imagePath: string = (() => {
    switch (type) {
      case 'black':
        return staticPath.images.logo_black_png
      case 'white':
        return staticPath.images.logo_white_png
      default:
        throw new Error(`Unexpected type: ${type}`)
    }
  })()

  return (
    <AspectRatio ratio={155 / 30} w={{ base: '255px', md: '355px' }} {...props}>
      <Image alt={'logo_image'} layout={'fill'} src={imagePath} />
    </AspectRatio>
  )
}
