import { Content } from '@src/components/layouts/Content'
import { Header } from '@src/components/ui/Header'
import { GlobalNavigation } from '@src/components/ui/Navigation/GlobalNavigation'
import { useGetWindowSize } from '@src/hooks/useGetWindowSize'
import { ReactNode, useMemo } from 'react'

type Props = {
  children: ReactNode
}

export const LayoutWithHeaderAndMenu = ({ children }: Props) => {
  const windowSize = useGetWindowSize()
  const headerPosition = useMemo(() => {
    if (windowSize.width > 450) {
      return windowSize.width / 2 - 225
    } else {
      return 0
    }
  }, [windowSize])

  return (
    <>
      <Header
        position={'fixed'}
        right={headerPosition}
        top={0}
        zIndex={'sticky'}
      />
      <Content>{children}</Content>
      <GlobalNavigation bottom={0} position={'sticky'} />
    </>
  )
}
