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
    biyou_svg: '/images/biyou.svg',
    footerMap_svg: '/images/footerMap.svg',
    iikanngiTop_JPG: '/images/iikanngiTop.JPG',
    logo_svg: '/images/logo.svg',
    top1_jpg: '/images/top1.jpg',
    top_image_svg: '/images/top_image.svg',
    top_image_title_svg: '/images/top_image_title.svg'
  }
} as const

// prettier-ignore
export type StaticPath = typeof staticPath
