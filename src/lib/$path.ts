/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  about: {
    $url: (url?: { hash?: string }) => ({ pathname: '/about' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath

// prettier-ignore
export const staticPath = {
  images: {
    PractitionerIntroduction_JPG: '/images/PractitionerIntroduction.JPG',
    biyou_svg: '/images/biyou.svg',
    footerLog_svg: '/images/footerLog.svg',
    footerMap_svg: '/images/footerMap.svg',
    headerLog_svg: '/images/headerLog.svg',
    iikanngiTop_JPG: '/images/iikanngiTop.JPG',
    logo_svg: '/images/logo.svg',
    section1_1_png: '/images/section1-1.png',
    section1_2_JPG: '/images/section1-2.JPG',
    secttion1_3_JPG: '/images/secttion1-3.JPG',
    top1_jpg: '/images/top1.jpg',
    top_image_svg: '/images/top_image.svg',
    top_image_title_svg: '/images/top_image_title.svg'
  }
} as const

// prettier-ignore
export type StaticPath = typeof staticPath
