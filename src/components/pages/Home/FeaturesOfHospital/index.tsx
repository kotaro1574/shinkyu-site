import { Icon, TriangleUpIcon } from '@chakra-ui/icons'
import { AspectRatio, Button, Grid, Heading, Text } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'

type Props = {
  content: string
  image: string
  title: string
}

export const FeaturesOfHospital = ({ content, image, title }: Props) => {
  return (
    <Grid gap={4} placeItems={'center'}>
      <Heading color={'#DBB025'} fontSize={'xl'}>
        {title}
      </Heading>
      <AspectRatio
        overflow={'hidden'}
        ratio={300 / 200}
        rounded={'sm'}
        w={'80%'}
      >
        <Image alt={'top_image'} layout={'fill'} src={image} />
      </AspectRatio>
      <Text>{content}</Text>
      <Button
        bg={'#DBB025'}
        color={'white'}
        fontSize={'md'}
        fontWeight={'medium'}
        rightIcon={<Icon as={TriangleUpIcon} transform={'rotate(90deg)'} />}
      >
        詳しくはこちら
      </Button>
    </Grid>
  )
}
