import { Box } from '@chakra-ui/react'
import { ContentItem } from '@src/components/ui/Content/ContentItem'
import { Title } from '@src/components/ui/Heading/Title'
import { staticPath } from '@src/lib/$path'

const ACUPUNCTURE_AND_MOXIBUSTION_CONTENTS = [
  {
    content:
      '鍼灸は一般に｢はり・きゅう｣または｢しんきゅう｣と呼ばれ、疾患や症状に適した経穴(ツボ)に金属の細い針を刺入したり艾(もぐさ)を置いて燃焼させたりなど、生体に刺激を加えることで元々身体に備わっている病気を治す力を高めて元気にする治療法です。',
    image:
      staticPath.images.Treatment.Detail.AcupunctureAndMoxibustion
        .Acupuncture_jpeg,
    title: '鍼',
  },
  {
    content:
      '鍼灸は一般に｢はり・きゅう｣または｢しんきゅう｣と呼ばれ、疾患や症状に適した経穴(ツボ)に金属の細い針を刺入したり艾(もぐさ)を置いて燃焼させたりなど、生体に刺激を加えることで元々身体に備わっている病気を治す力を高めて元気にする治療法です。',
    image:
      staticPath.images.Treatment.Detail.AcupunctureAndMoxibustion
        .Moxibustion_jpeg,
    title: '灸',
  },
  {
    content:
      '鍼灸は一般に｢はり・きゅう｣または｢しんきゅう｣と呼ばれ、疾患や症状に適した経穴(ツボ)に金属の細い針を刺入したり艾(もぐさ)を置いて燃焼させたりなど、生体に刺激を加えることで元々身体に備わっている病気を治す力を高めて元気にする治療法です。',
    image:
      staticPath.images.Treatment.Detail.AcupunctureAndMoxibustion
        .ElectricAcupuncture_jpeg,
    title: '電気鍼（パルス）',
  },
  {
    content:
      '鍼灸は一般に｢はり・きゅう｣または｢しんきゅう｣と呼ばれ、疾患や症状に適した経穴(ツボ)に金属の細い針を刺入したり艾(もぐさ)を置いて燃焼させたりなど、生体に刺激を加えることで元々身体に備わっている病気を治す力を高めて元気にする治療法です。',
    image:
      staticPath.images.Treatment.Detail.AcupunctureAndMoxibustion
        .BoxMoxibustion_jpeg,
    title: '箱灸',
  },
]

export const TreatmentContent = () => {
  return (
    <Box p={8} pt={10}>
      <Title>鍼灸</Title>
      {ACUPUNCTURE_AND_MOXIBUSTION_CONTENTS.map((item, index) => (
        <ContentItem {...item} key={`${item.title}_${index}`} mt={10} />
      ))}
    </Box>
  )
}
