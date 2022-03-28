import { Box } from '@chakra-ui/react'
import { FeaturesOfHospital } from '@src/components/pages/About/FeaturesOfHospital'
import { PractitionerIntroduction } from '@src/components/pages/About/PractitionerIntroduction'
import { staticPath } from '@src/lib/$path'

export type FeatureOfHospital = {
  content: string
  image: string
  title: string
}

const FEATURES_OF_HOSPITAL: FeatureOfHospital[] = [
  {
    content:
      '治療を行う前に、問診、全身の状態を確認していき患者様ひとりひとりの身体にあった施術を提供させていただきます。',
    image: staticPath.images.section1_1_png,
    title: '一人一人に合った施術',
  },
  {
    content:
      '当院の鍼灸治療で使用する針は すべて使い捨てです。 感染症の心配もありません。',
    image: staticPath.images.section1_2_JPG,
    title: '安心安全な施術',
  },
  {
    content:
      '当院は完全予約制です。 プラベートな空間でご症状について 安心してご相談ください。',
    image: staticPath.images.secttion1_3_JPG,
    title: 'プライベートな空間で',
  },
]

export const AboutContent = () => {
  return (
    <Box p={4}>
      <FeaturesOfHospital feature={FEATURES_OF_HOSPITAL} />
      <PractitionerIntroduction as={'section'} mt={10} />
    </Box>
  )
}