import { Box, Grid, Text } from '@chakra-ui/react'
import { FeaturesOfHospital } from '@src/components/pages/Home/FeaturesOfHospital'
import { TopImage } from '@src/components/pages/Home/TopImage'
import { BeautyAcupunctureCard } from '@src/components/ui/Card/BeautyAcupunctureCard'
import { Title } from '@src/components/ui/Title'
import { staticPath } from '@src/lib/$path'

const FEATURES_OF_HOSPITAL = [
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

export const HomeContent = () => {
  return (
    <Box>
      <TopImage />
      <Grid gap={10} px={4} py={8}>
        <Grid gap={6}>
          <Text textAlign={'center'}>
            東広島市西条
            <br />
            鍼灸・整体・産後骨盤矯正・吸い玉
            <br />
            交通事故治療・各種保険扱い
          </Text>
          <BeautyAcupunctureCard />
        </Grid>
        <Grid gap={8}>
          <Title title={'当院の特徴'} />
          {FEATURES_OF_HOSPITAL.map((item, index) => (
            <FeaturesOfHospital {...item} key={`FeaturesOfHospital-${index}`} />
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}
