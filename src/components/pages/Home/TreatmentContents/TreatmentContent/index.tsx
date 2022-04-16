import { AspectRatio, Box, BoxProps, Text } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'

type Props = {
  genre: string
  image: string
} & BoxProps

export const TreatmentContent = ({ genre, image, ...boxProps }: Props) => {
  return (
    <Box
      _hover={{ opacity: '50%' }}
      bg={'black'}
      position={'relative'}
      rounded={'sm'}
      {...boxProps}
    >
      <AspectRatio
        opacity={'70%'}
        overflow={'hidden'}
        ratio={150 / 120}
        rounded={'md'}
      >
        <Image alt={'top_image'} layout={'fill'} src={image} />
      </AspectRatio>
      <Text
        bottom={1}
        color={'white'}
        fontSize={'sm'}
        fontWeight={'medium'}
        position={'absolute'}
        w={'full'}
      >
        {genre}
      </Text>
    </Box>
  )
}
