import { Heading, HeadingProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
} & HeadingProps

export const SubTitle = ({ children, ...headingProps }: Props) => {
  return (
    <Heading
      color={'test.900'}
      fontSize={'lg'}
      fontWeight={'medium'}
      {...headingProps}
    >
      {children}
    </Heading>
  )
}
