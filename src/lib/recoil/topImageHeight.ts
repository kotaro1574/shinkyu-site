import { atom, useRecoilState } from 'recoil'

const topImageHeightAtom = atom<number>({
  default: 0,
  key: 'topImageHeightAtom',
})

export const useTopImageHeight = () => {
  const [topImageHeight, setTopImageHeight] = useRecoilState(topImageHeightAtom)

  return { setTopImageHeight, topImageHeight }
}
