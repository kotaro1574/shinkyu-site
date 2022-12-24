import { createContext, ReactNode, useContext, useState } from 'react'

type OverviewHeightStateType = {
  overViewHeight: number
  setOverviewHeight: (value: number) => void
}

type OverviewHeightProviderProps = {
  children: ReactNode
}

const OverviewHeight = createContext<OverviewHeightStateType>({
  overViewHeight: 0,
  setOverviewHeight: (value) => {
    console.log(value)
  },
})

export const useOverViewHeightContext = () => useContext(OverviewHeight)

export const OverviewHeightProvider = ({
  children,
}: OverviewHeightProviderProps) => {
  const [overViewHeight, setOverviewHeight] = useState(0)
  const value = {
    overViewHeight,
    setOverviewHeight,
  }
  return (
    <OverviewHeight.Provider value={value}>{children}</OverviewHeight.Provider>
  )
}
