import { Box, BoxProps } from '@chakra-ui/react'
import { Footer } from '@src/components/ui/Footer'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  footerProps?: BoxProps
} & BoxProps

export const LayoutWithMainAndFooter = ({
  children,
  footerProps,
  ...boxProps
}: Props) => {
  return (
    <>
      <Box as={'main'} flex={1} {...boxProps}>
        {children}
      </Box>
      <Footer {...footerProps} />
    </>
  )
}
