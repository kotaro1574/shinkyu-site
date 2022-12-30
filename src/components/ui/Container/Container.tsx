import { BoxProps, Container as ChakraContainer } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
} & BoxProps

export const Container = ({ children, ...props }: Props) => {
  return (
    <ChakraContainer as={'section'} py={{ base: 10, md: 12 }} {...props}>
      {children}
    </ChakraContainer>
  )
}
