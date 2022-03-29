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
    TopSlider: {
      AdobeStock_207377054_Preview_jpeg: '/images/TopSlider/AdobeStock_207377054_Preview.jpeg',
      AdobeStock_213691742_Preview_jpeg: '/images/TopSlider/AdobeStock_213691742_Preview.jpeg',
      AdobeStock_38149832_Preview_jpeg: '/images/TopSlider/AdobeStock_38149832_Preview.jpeg'
    },
    Treatment: {
      TailorMadeTreatment: {
        AdobeStock_416225254_Preview_jpeg: '/images/Treatment/TailorMadeTreatment/AdobeStock_416225254_Preview.jpeg'
      }
    },
    biyou_svg: '/images/biyou.svg',
    footerLog_svg: '/images/footerLog.svg',
    footerMap_svg: '/images/footerMap.svg',
    headerLog_svg: '/images/headerLog.svg',
    iikanngiTop_JPG: '/images/iikanngiTop.JPG',
    logo_svg: '/images/logo.svg',
    section1_1_png: '/images/section1-1.png',
    section1_2_JPG: '/images/section1-2.JPG',
    secttion1_3_JPG: '/images/secttion1-3.JPG',
    top_image_svg: '/images/top_image.svg',
    top_image_title_svg: '/images/top_image_title.svg'
  }
} as const

// prettier-ignore
export type StaticPath = typeof staticPath
