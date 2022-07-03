import { useEffect, useRef, useState } from 'react'

export const useElementHeight = () => {
  const heightInspectedEl = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (heightInspectedEl?.current) {
      const { height } = heightInspectedEl.current.getBoundingClientRect()
      setHeight(height)
    }
  }, [heightInspectedEl])

  return { height, heightInspectedEl }
}
