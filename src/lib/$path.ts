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
    PractitionerIntroduction_JPG: '/images/PractitionerIntroduction.JPG',
    footer_jpg: '/images/footer.jpg',
    introduction: {
      director_image_jpg: '/images/introduction/director_image.jpg'
    },
    mainVisual: {
      slide_image_1_jpg: '/images/mainVisual/slide_image_1.jpg',
      slide_image_2_jpg: '/images/mainVisual/slide_image_2.jpg',
      slide_image_3_jpg: '/images/mainVisual/slide_image_3.jpg',
      slide_image_4_jpg: '/images/mainVisual/slide_image_4.jpg'
    },
    section1_1_png: '/images/section1-1.png',
    section1_2_JPG: '/images/section1-2.JPG',
    top_image_title_svg: '/images/top_image_title.svg',
    treatment: {
      acupuncture_jpg: '/images/treatment/acupuncture.jpg',
      manipulative_jpg: '/images/treatment/manipulative.jpg',
      moxibustion_jpg: '/images/treatment/moxibustion.jpg',
      postpartum_jpg: '/images/treatment/postpartum.jpg',
      suckingball_jpg: '/images/treatment/suckingball.jpg'
    }
  }
} as const

// prettier-ignore
export type StaticPath = typeof staticPath
