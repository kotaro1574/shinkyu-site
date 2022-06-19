import { Box } from '@chakra-ui/react'
import { Box100vh } from '@src/components/functional/Box100vh'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const ApplicationLayout = ({ children }: Props) => {
  return (
    <Box100vh bg={'#f3f9f8'}>
      <Box
        bg={'white'}
        boxShadow={'md'}
        display={'flex'}
        flexDirection={'column'}
        maxW={'450px'}
        minH={'full'}
        mx={'auto'}
        position={'relative'}
        w={'full'}
      >
        {children}
      </Box>
    </Box100vh>
  )
}
