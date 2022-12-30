import { Box, Center, CenterProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
} & CenterProps

export const SectionHeading = ({ children, ...props }: Props) => {
  return (
    <Center
      _after={{
        bgColor: 'teal.300',
        content: '""',
        display: 'inline-block',
        h: { base: '1px', md: '2px' },
        ml: 4,
        w: 6,
      }}
      _before={{
        bgColor: 'teal.300',
        content: '""',
        display: 'inline-block',
        h: { base: '1px', md: '2px' },
        mr: 4,
        w: 6,
      }}
      color={'teal.400'}
      fontSize={{ base: '4xl', md: '7xl', sm: '5xl' }}
      fontWeight={{ base: 'medium', md: 'bold' }}
      {...props}
    >
      <Box>{children}</Box>
    </Center>
  )
}
