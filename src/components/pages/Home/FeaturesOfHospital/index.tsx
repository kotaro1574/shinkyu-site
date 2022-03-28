import { Icon, TriangleUpIcon } from '@chakra-ui/icons'
import {
  AspectRatio,
  Box,
  Button,
  Grid,
  GridProps,
  Heading,
  Text,
} from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'

type Props = {
  content: string
  image: string
  title: string
} & GridProps

export const FeaturesOfHospital = ({
  content,
  image,
  title,
  ...gridProps
}: Props) => {
  return (
    <Box {...gridProps}>
      <AspectRatio
        mx={'auto'}
        overflow={'hidden'}
        ratio={16 / 8}
        rounded={'sm'}
      >
        <Image alt={'top_image'} layout={'fill'} src={image} />
      </AspectRatio>
      <Grid gap={3} mt={3}>
        <Heading color={'#DBB025'} fontSize={'lg'} textAlign={'center'}>
          {title}
        </Heading>
        <Text fontSize={'sm'} textAlign={'left'}>
          {content}
        </Text>
        <Button
          bg={'#DBB025'}
          color={'white'}
          fontSize={'sm'}
          fontWeight={'medium'}
          h={'35px'}
          maxW={'170px'}
          mx={'auto'}
          rightIcon={<Icon as={TriangleUpIcon} transform={'rotate(90deg)'} />}
        >
          詳しくはこちら
        </Button>
      </Grid>
    </Box>
  )
}
