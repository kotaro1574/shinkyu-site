import { Box } from '@chakra-ui/react'
import { Content } from '@src/components/layouts/Content'
import { Header } from '@src/components/ui/Header'
import { GlobalNavigation } from '@src/components/ui/Navigation/GlobalNavigation'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const LayoutWithStickyHeaderAndMenu = ({ children }: Props) => {
  return (
    <Box>
      <Header position={'sticky'} top={0} zIndex={'sticky'} />
      <Content>{children}</Content>
      <GlobalNavigation bottom={0} position={'sticky'} />
    </Box>
  )
}
