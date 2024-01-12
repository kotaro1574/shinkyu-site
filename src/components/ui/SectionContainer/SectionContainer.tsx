import { BoxProps, Container as ChakraContainer } from '@chakra-ui/react'

export const SectionContainer = ({ children, ...props }: BoxProps) => {
  return (
    <ChakraContainer
      as={'section'}
      maxW={1000}
      pb={{ base: 16, md: '100px' }}
      pt={{ base: 16, md: '100px' }}
      {...props}
    >
      {children}
    </ChakraContainer>
  )
}
