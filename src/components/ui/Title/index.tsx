import { Divider, Grid, Heading } from '@chakra-ui/react'

type Props = {
  title: string
}

export const Title = ({ title }: Props) => {
  return (
    <Grid gap={2} m={'auto'} placeItems={'center'}>
      <Heading fontSize={'xl'}>{title}</Heading>
      <Divider borderBottomWidth={2} borderColor={'#E7C65B'} w={'110px'} />
    </Grid>
  )
}
