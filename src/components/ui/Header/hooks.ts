import { useDisclosure } from '@chakra-ui/react'
import { useGetWindowSize } from '@src/hooks/useGetWindowSize'
import { useEffect, useState } from 'react'

export const useHeader = (activePoint: number) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [isHeaderActive, setIsHeaderActive] = useState<boolean>(false)

  useEffect(() => {
    const scrollWindow = () => {
      const ap = activePoint
      let scroll = 0
      scroll = window.scrollY
      if (ap <= scroll) {
        setIsHeaderActive(true)
      } else {
        setIsHeaderActive(false)
      }
    }

    window.addEventListener('scroll', scrollWindow)
    return () => {
      window.removeEventListener('scroll', scrollWindow)
    }
  }, [activePoint])

  const { windowSize } = useGetWindowSize()
  const headerWidth = windowSize.width > 450 ? 450 : '100%'
  const headerInnerWidth = windowSize.width > 450 ? 405 : '100%'

  return {
    headerInnerWidth,
    headerWidth,
    isHeaderActive,
    isOpen,
    onClose,
    onOpen,
  }
}
