import { Box } from '@chakra-ui/react'
import { Box100vh } from '@src/components/functional/Box100vh'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Content = ({ children }: Props) => {
  return (
    <Box100vh>
      <Box display={'flex'} flex={1} flexDirection={'column'} h={'full'}>
        {children}
      </Box>
    </Box100vh>
  )
}
