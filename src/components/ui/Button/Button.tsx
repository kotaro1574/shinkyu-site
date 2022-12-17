import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react'

type Props = ButtonProps

export const Button = ({ ...props }: Props) => {
  return <ChakraButton fontWeight={'medium'} {...props} />
}
