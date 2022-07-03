import { useEffect, useState } from 'react'

export const useGetWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          height: window.innerHeight,
          width: window.innerWidth,
        })
      }

      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    } else {
      return
    }
  }, [])
  return { windowSize }
}
