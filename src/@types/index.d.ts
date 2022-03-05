import type { NextPage, NextPageWithLayout } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'

declare module 'next' {
  // NextPageの型定義と合わせるために、"""Don't use `{}` as a type. `{}` actually means &quot;any non-nullish value&quot;"""のエラーを無効化
  // eslint-disable-next-line @typescript-eslint/ban-types
  type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement, pageProps: P) => ReactElement
  }
}

declare module 'next/app' {
  // NextPageの型定義と合わせるために、"""Don't use `{}` as a type. `{}` actually means &quot;any non-nullish value&quot;"""のエラーを無効化
  // eslint-disable-next-line @typescript-eslint/ban-types
  type AppPropsWithLayout<P = {}> = AppProps<P> & {
    Component: NextPageWithLayout<P>
  }
}
