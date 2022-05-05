import { Box, Divider } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Title = ({ children }: Props) => {
  return (
    <Box>
      <Box as={'span'} fontSize={'xl'} fontWeight={'medium'} pb={1}>
        {children}
      </Box>
      <Divider borderColor={'#E7C65B'} borderWidth={1} mt={1} w={'45px'} />
    </Box>
  )
}
