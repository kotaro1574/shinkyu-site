/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  content: {
    $url: (url?: { hash?: string }) => ({ pathname: '/content' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath

// prettier-ignore
export const staticPath = {
  images: {
    footerMap_svg: '/images/footerMap.svg',
    logo_svg: '/images/logo.svg',
    top_image_svg: '/images/top_image.svg'
  }
} as const

// prettier-ignore
export type StaticPath = typeof staticPath
