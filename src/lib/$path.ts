/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath

// prettier-ignore
export const staticPath = {
  images: {
    footerMap_svg: '/images/footerMap.svg'
  }
} as const

// prettier-ignore
export type StaticPath = typeof staticPath
