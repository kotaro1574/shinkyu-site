import { Content } from '@src/components/layouts/Content'
import { HomePageHeader } from '@src/components/layouts/Header/HomePageHeader'
import { OtherPageHeader } from '@src/components/layouts/Header/OtherPageHeader'
import { GlobalNavigation } from '@src/components/ui/Navigation/GlobalNavigation'
import { useGetWindowSize } from '@src/hooks/useGetWindowSize'
import { ReactNode, useMemo } from 'react'

type Props = {
  children: ReactNode
  isHomePage?: boolean
}

export const LayoutWithHeaderAndMenu = ({ children, isHomePage }: Props) => {
  const { windowSize } = useGetWindowSize()
  const headerPosition = useMemo(() => {
    if (windowSize.width > 450) {
      return windowSize.width / 2 - 225
    } else {
      return 0
    }
  }, [windowSize])

  return (
    <>
      {isHomePage ? (
        <HomePageHeader
          position={'fixed'}
          right={headerPosition}
          top={0}
          zIndex={'sticky'}
        />
      ) : (
        <OtherPageHeader position={'sticky'} top={0} zIndex={'sticky'} />
      )}
      <Content>{children}</Content>
      <GlobalNavigation bottom={0} position={'sticky'} />
    </>
  )
}
