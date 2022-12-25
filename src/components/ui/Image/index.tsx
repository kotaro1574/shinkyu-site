import { chakra } from '@chakra-ui/react'
// eslint-disable-next-line no-restricted-imports
import NextImage from 'next/image'
import { ComponentProps } from 'react'

const ChakraNextImage = chakra(NextImage)
type Props = ComponentProps<typeof ChakraNextImage>

export const Image = (props: Props) => {
  return <ChakraNextImage {...props} />
}
