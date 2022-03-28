import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Content = ({ children }: Props) => {
  return (
    <Box display={'flex'} flex={1} flexDirection={'column'} h={'full'}>
      {children}
    </Box>
  )
}
