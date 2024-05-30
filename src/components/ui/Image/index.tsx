// eslint-disable-next-line no-restricted-imports
import NextImage from 'next/image'
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof NextImage>

export const Image = (props: Props) => {
  return <NextImage {...props} />
}
