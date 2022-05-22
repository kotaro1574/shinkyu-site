/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  about: {
    $url: (url?: { hash?: string }) => ({ pathname: '/about' as const, hash: url?.hash })
  },
  features: {
    $url: (url?: { hash?: string }) => ({ pathname: '/features' as const, hash: url?.hash })
  },
  treatments: {
    _pid: (pid: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/treatments/[pid]' as const, query: { pid }, hash: url?.hash })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/treatments' as const, hash: url?.hash })
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
  },
  natsumi: {
    about_top_jpg: '/natsumi/about-top.jpg',
    about_top2_jpg: '/natsumi/about-top2.jpg',
    logo: {
      logo_svg: '/natsumi/logo/logo.svg',
      logo10_svg: '/natsumi/logo/logo10.svg',
      logo11_svg: '/natsumi/logo/logo11.svg',
      logo12_svg: '/natsumi/logo/logo12.svg',
      logo13_svg: '/natsumi/logo/logo13.svg',
      logo14_svg: '/natsumi/logo/logo14.svg',
      logo2_svg: '/natsumi/logo/logo2.svg',
      logo3_svg: '/natsumi/logo/logo3.svg',
      logo4_svg: '/natsumi/logo/logo4.svg',
      logo5_svg: '/natsumi/logo/logo5.svg',
      logo6_svg: '/natsumi/logo/logo6.svg',
      logo7_svg: '/natsumi/logo/logo7.svg',
      logo8_svg: '/natsumi/logo/logo8.svg',
      logo9_svg: '/natsumi/logo/logo9.svg'
    },
    practitioner_jpg: '/natsumi/practitioner.jpg',
    pre: {
      $160_120_jpg: '/natsumi/pre/160-120.jpg',
      $450_150_jpg: '/natsumi/pre/450-150.jpg',
      $450_150hari_jpg: '/natsumi/pre/450-150hari.jpg'
    },
    top_feature: {
      ordermade_jpg: '/natsumi/top-feature/ordermade.jpg',
      private_jpg: '/natsumi/top-feature/private.jpg',
      safety_jpg: '/natsumi/top-feature/safety.jpg'
    },
    top_treatment: {
      acupuncture_and_moxibustion_jpg: '/natsumi/top-treatment/acupuncture and moxibustion.jpg',
      chiropractics_jpg: '/natsumi/top-treatment/chiropractics.jpg',
      pelvic_correction_jpg: '/natsumi/top-treatment/pelvic-correction.jpg'
    },
    treatment_top_jpg: '/natsumi/treatment-top.jpg',
    treatmentpage: {
      ElectricAcupuncture_jpg: '/natsumi/treatmentpage/ElectricAcupuncture.jpg',
      acupuncture_jpg: '/natsumi/treatmentpage/acupuncture.jpg',
      moxibustion_jpg: '/natsumi/treatmentpage/moxibustion.jpg'
    }
  }
} as const

// prettier-ignore
export type StaticPath = typeof staticPath
