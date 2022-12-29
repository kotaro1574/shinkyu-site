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
    MainVisual: {
      slide_image_1_jpg: '/images/MainVisual/slide_image_1.jpg',
      slide_image_2_jpg: '/images/MainVisual/slide_image_2.jpg',
      slide_image_3_jpg: '/images/MainVisual/slide_image_3.jpg',
      slide_image_4_jpg: '/images/MainVisual/slide_image_4.jpg'
    },
    PractitionerIntroduction_JPG: '/images/PractitionerIntroduction.JPG',
    footer_jpg: '/images/footer.jpg',
    section1_1_png: '/images/section1-1.png',
    section1_2_JPG: '/images/section1-2.JPG',
    top_image_title_svg: '/images/top_image_title.svg'
  }
} as const

// prettier-ignore
export type StaticPath = typeof staticPath
