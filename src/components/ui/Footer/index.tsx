import {
  AspectRatio,
  Center,
  Grid,
  Image,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import { staticPath } from '@src/lib/$path'

export const Footer = () => {
  return (
    <Grid
      bg={'#FAF7ED'}
      h={'500px'}
      mt={'auto'}
      templateColumns={'repeat(2,1fr)'}
    >
      <Center>
        <UnorderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>
      </Center>
      <AspectRatio h={'500px'} ratio={1}>
        <Image alt={'地図'} src={staticPath.images.footerMap_svg} />
      </AspectRatio>
    </Grid>
  )
}
