import { AspectRatio, AspectRatioProps } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'

type Props = {
  type?: 'black' | 'white'
} & AspectRatioProps

export const Logo = ({ type = 'black', ...props }: Props) => {
  const imagePath: string = (() => {
    switch (type) {
      case 'black':
        return '/images/logo_black.png'
      case 'white':
        return '/images/logo_white.png'
      default:
        throw new Error(`Unexpected type: ${type}`)
    }
  })()

  return (
    <AspectRatio ratio={608 / 72} w={{ base: '320px', md: '420px' }} {...props}>
      <Image fill alt={'繁内鍼灸治療院'} sizes={'100%'} src={imagePath} />
    </AspectRatio>
  )
}
