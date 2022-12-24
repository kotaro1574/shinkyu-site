import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react'

type Props = ButtonProps

export const Button = ({ ...props }: Props) => {
  return (
    <ChakraButton fontSize={20} fontWeight={'medium'} rounded={4} {...props} />
  )
}
