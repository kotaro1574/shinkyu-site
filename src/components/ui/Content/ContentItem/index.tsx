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
      <AspectRatio overflow={'hidden'} ratio={16 / 8} rounded={'sm'}>
        <Image alt={'top_image'} layout={'fill'} src={image} />
      </AspectRatio>
      <Grid gap={4} mt={5}>
        <Heading color={'test.900'} fontSize={'lg'} fontWeight={'medium'}>
          {title}
        </Heading>
        <Text fontSize={'sm'}>{content}</Text>
      </Grid>
    </Box>
  )
}
