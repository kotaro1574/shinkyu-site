import { CenterProps, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
} & CenterProps

export const SectionHeading = ({ children, ...props }: Props) => {
  return (
    <Heading
      LineHeight={1.5}
      _after={{
        bgColor: 'teal.300',
        bottom: 0,
        content: '""',
        display: 'inline-block',
        h: '3px',
        left: '50%',
        position: 'absolute',
        transform: 'translateX(-50%)',
        w: '50px',
      }}
      as={'h2'}
      fontSize={{ base: '4xl', md: '7xl' }}
      mb={{ base: 4, md: 8 }}
      pb={3}
      position={'relative'}
      textAlign={'center'}
      {...props}
    >
      {children}
    </Heading>
  )
}
