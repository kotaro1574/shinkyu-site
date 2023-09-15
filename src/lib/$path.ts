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
    director_image_jpg: '/images/director_image.jpg',
    logo_png: '/images/logo.png',
    mainVisual1_jpg: '/images/mainVisual1.jpg',
    mainVisual2_jpg: '/images/mainVisual2.jpg',
    mainVisual3_jpg: '/images/mainVisual3.jpg',
    mainVisual4_jpg: '/images/mainVisual4.jpg',
    treatment_hari_jpg: '/images/treatment-hari.jpg',
    treatment_kotsuban_jpg: '/images/treatment-kotsuban.jpg',
    treatment_okyu_jpg: '/images/treatment-okyu.jpg',
    treatment_seitai_jpg: '/images/treatment-seitai.jpg',
    treatment_suidama_jpg: '/images/treatment-suidama.jpg'
  }
} as const

// prettier-ignore
export type StaticPath = typeof staticPath
