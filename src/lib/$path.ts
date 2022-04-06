/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  about: {
    $url: (url?: { hash?: string }) => ({ pathname: '/about' as const, hash: url?.hash })
  },
  treatments: {
    _pid: (pid: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/treatments/[pid]' as const, query: { pid }, hash: url?.hash })
    })
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
      AdobeStock_38149832_Preview_jpeg: '/images/TopSlider/AdobeStock_38149832_Preview.jpeg',
      TopImage_JPG: '/images/TopSlider/TopImage.JPG'
    },
    Treatment: {
      Detail: {
        AcupunctureAndMoxibustion: {
          Acupuncture_jpeg: '/images/Treatment/Detail/AcupunctureAndMoxibustion/Acupuncture.jpeg',
          BoxMoxibustion_jpeg: '/images/Treatment/Detail/AcupunctureAndMoxibustion/BoxMoxibustion.jpeg',
          ElectricAcupuncture_jpeg: '/images/Treatment/Detail/AcupunctureAndMoxibustion/ElectricAcupuncture.jpeg',
          Moxibustion_jpeg: '/images/Treatment/Detail/AcupunctureAndMoxibustion/Moxibustion.jpeg'
        }
      },
      TailorMadeTreatment: {
        AdobeStock_416225254_Preview_jpeg: '/images/Treatment/TailorMadeTreatment/AdobeStock_416225254_Preview.jpeg'
      },
      TreatmentContents: {
        $1AdobeStock_217895936_Preview_jpeg: '/images/Treatment/TreatmentContents/1AdobeStock_217895936_Preview.jpeg',
        $2AdobeStock_90536261_Preview_jpeg: '/images/Treatment/TreatmentContents/2AdobeStock_90536261_Preview.jpeg',
        $3AdobeStock_252774376_Preview_jpeg: '/images/Treatment/TreatmentContents/3AdobeStock_252774376_Preview.jpeg',
        $4AdobeStock_410038415_Preview_jpeg: '/images/Treatment/TreatmentContents/4AdobeStock_410038415_Preview.jpeg',
        $5AdobeStock_2653232_Preview_jpeg: '/images/Treatment/TreatmentContents/5AdobeStock_2653232_Preview.jpeg'
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
    top_image_svg: '/images/top_image.svg',
    top_image_title_svg: '/images/top_image_title.svg'
  }
} as const

// prettier-ignore
export type StaticPath = typeof staticPath
