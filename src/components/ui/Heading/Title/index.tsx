import { Divider, Grid, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Title = ({ children }: Props) => {
  return (
    <Grid gap={2} m={'auto'} placeItems={'center'}>
      <Heading fontSize={'xl'} fontWeight={'medium'}>
        {children}
      </Heading>
      <Divider borderBottomWidth={2} borderColor={'#E7C65B'} w={'110px'} />
    </Grid>
  )
}
