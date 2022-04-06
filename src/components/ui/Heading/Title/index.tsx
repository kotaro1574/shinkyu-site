import { Box, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Title = ({ children }: Props) => {
  return (
    <Heading>
      <Box
        as={'span'}
        borderBottomWidth={2}
        borderColor={'#E7C65B'}
        fontSize={'xl'}
        fontWeight={'medium'}
        pb={1}
      >
        {children}
      </Box>
    </Heading>
  )
}
