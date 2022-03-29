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

export const FeaturesOfHospitalItem = ({
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
      </Grid>
    </Box>
  )
}
