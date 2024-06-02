'use client'

import { ChakraProvider as ClientChakraProvider } from '@chakra-ui/react'
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof ClientChakraProvider>

export const ChakraProvider = ({ children, ...props }: Props) => {
  return <ClientChakraProvider {...props}>{children}</ClientChakraProvider>
}
