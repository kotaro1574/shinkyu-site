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
      hari_3_jpg: '/images/mainVisual/hari-3.jpg',
      kanban_jpg: '/images/mainVisual/kanban.jpg',
      mainVisual1_jpg: '/images/mainVisual/mainVisual1.jpg',
      okyu_2_jpg: '/images/mainVisual/okyu-2.jpg',
      slide_image_1_jpg: '/images/mainVisual/slide_image_1.jpg',
      slide_image_2_jpg: '/images/mainVisual/slide_image_2.jpg',
      slide_image_3_jpg: '/images/mainVisual/slide_image_3.jpg',
      slide_image_4_jpg: '/images/mainVisual/slide_image_4.jpg',
      suidama_1_jpg: '/images/mainVisual/suidama-1.jpg'
    },
    section1_1_png: '/images/section1-1.png',
    section1_2_JPG: '/images/section1-2.JPG',
    top_image_title_svg: '/images/top_image_title.svg',
    toshi_image_jpg: {
      hari_1_jpg: '/images/toshi-image-jpg/hari-1.jpg',
      hari_2_jpg: '/images/toshi-image-jpg/hari-2.jpg',
      hari_3_jpg: '/images/toshi-image-jpg/hari-3.jpg',
      hari_4_jpg: '/images/toshi-image-jpg/hari-4.jpg',
      hari_5_jpg: '/images/toshi-image-jpg/hari-5.jpg',
      hari_6_jpg: '/images/toshi-image-jpg/hari-6.jpg',
      hari_7_jpg: '/images/toshi-image-jpg/hari-7.jpg',
      kanban_jpg: '/images/toshi-image-jpg/kanban.jpg',
      kotubann_1_jpg: '/images/toshi-image-jpg/kotubann-1.jpg',
      kotubann_2_jpg: '/images/toshi-image-jpg/kotubann-2.jpg',
      kyousei_1_jpg: '/images/toshi-image-jpg/kyousei-1.jpg',
      kyousei_2_jpg: '/images/toshi-image-jpg/kyousei-2.jpg',
      okyu_1_jpg: '/images/toshi-image-jpg/okyu-1.jpg',
      okyu_2_jpg: '/images/toshi-image-jpg/okyu-2.jpg',
      okyu_3_jpg: '/images/toshi-image-jpg/okyu-3.jpg',
      okyu_4_jpg: '/images/toshi-image-jpg/okyu-4.jpg',
      suidama_1_jpg: '/images/toshi-image-jpg/suidama-1.jpg',
      suidama_2_jpg: '/images/toshi-image-jpg/suidama-2.jpg',
      suidama_3_jpg: '/images/toshi-image-jpg/suidama-3.jpg',
      suidama_4_jpg: '/images/toshi-image-jpg/suidama-4.jpg',
      suidama_5_jpg: '/images/toshi-image-jpg/suidama-5.jpg',
      tohsi_2_jpg: '/images/toshi-image-jpg/tohsi-2.jpg',
      toshi_1_jpg: '/images/toshi-image-jpg/toshi-1.jpg',
      toshi_3_jpg: '/images/toshi-image-jpg/toshi-3.jpg'
    },
    treatment: {
      acupuncture_jpg: '/images/treatment/acupuncture.jpg',
      hari_5_jpg: '/images/treatment/hari-5.jpg',
      hari_7_jpg: '/images/treatment/hari-7.jpg',
      kotubann_2_jpg: '/images/treatment/kotubann-2.jpg',
      kyousei_2_jpg: '/images/treatment/kyousei-2.jpg',
      manipulative_jpg: '/images/treatment/manipulative.jpg',
      moxibustion_jpg: '/images/treatment/moxibustion.jpg',
      okyu_1_jpg: '/images/treatment/okyu-1.jpg',
      postpartum_jpg: '/images/treatment/postpartum.jpg',
      suckingball_jpg: '/images/treatment/suckingball.jpg',
      suidama_4_jpg: '/images/treatment/suidama-4.jpg'
    }
  }
} as const

// prettier-ignore
export type StaticPath = typeof staticPath
