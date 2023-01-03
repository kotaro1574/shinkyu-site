import { BoxProps, Container as ChakraContainer } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
} & BoxProps

export const SectionContainer = ({ children, ...props }: Props) => {
  return (
    <ChakraContainer as={'section'} py={{ base: 10, md: 14 }} {...props}>
      {children}
    </ChakraContainer>
  )
}
