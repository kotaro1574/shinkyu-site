import {
  AspectRatio,
  Box,
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

export const ContentItem = ({ content, image, title, ...gridProps }: Props) => {
  return (
    <Box {...gridProps}>
      <AspectRatio
        overflow={'hidden'}
        ratio={16 / 10}
        rounded={'sm'}
        w={'200px'}
      >
        <Image alt={'top_image'} layout={'fill'} src={image} />
      </AspectRatio>
      <Grid gap={3} mt={3}>
        <Heading
          color={'#DBB025'}
          fontSize={'lg'}
          fontWeight={'medium'}
          textAlign={'center'}
        >
          {title}
        </Heading>
        <Text fontSize={'sm'} textAlign={'left'}>
          {content}
        </Text>
      </Grid>
    </Box>
  )
}
