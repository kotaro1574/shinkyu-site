import { Box } from '@chakra-ui/react'
import { ContentItem } from '@src/components/ui/Content/ContentItem'
import { Title } from '@src/components/ui/Heading/Title'
import { staticPath } from '@src/lib/$path'

export const TreatmentContent = () => {
  return (
    <Box p={4} pt={10}>
      <Title>鍼灸</Title>
      <ContentItem
        content={
          '鍼灸は一般に｢はり・きゅう｣または｢しんきゅう｣と呼ばれ、疾患や症状に適した経穴(ツボ)に金属の細い針を刺入したり艾(もぐさ)を置いて燃焼させたりなど、生体に刺激を加えることで元々身体に備わっている病気を治す力を高めて元気にする治療法です。'
        }
        image={
          staticPath.images.Treatment.Detail.AcupunctureAndMoxibustion
            .Acupuncture_jpeg
        }
        mt={10}
        title={'針'}
      />
    </Box>
  )
}
