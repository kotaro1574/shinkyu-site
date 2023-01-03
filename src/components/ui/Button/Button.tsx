import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react'

type Props = ButtonProps

export const Button = ({ ...props }: Props) => {
  return (
    <ChakraButton
      color={'white'}
      fontSize={'lg'}
      fontWeight={'medium'}
      rounded={2}
      {...props}
    />
  )
}
