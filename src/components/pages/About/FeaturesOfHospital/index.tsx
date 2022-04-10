import { Box, BoxProps, Flex } from '@chakra-ui/react'
import { ContentItem } from '@src/components/ui/Content/ContentItem'
import { Title } from '@src/components/ui/Heading/Title'
import { staticPath } from '@src/lib/$path'

type FeatureOfHospital = {
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
    image: staticPath.images.TopSlider.TopImage_JPG,
    title: 'プライベートな空間で',
  },
]

export const FeaturesOfHospital = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Title>当院の特徴</Title>
      <Flex
        alignItems={'flex-starts'}
        bg={'black.100'}
        borderColor={'line.light'}
        borderWidth={1}
        mt={4}
        overflowX={'scroll'}
        p={4}
        rounded={'md'}
      >
        {FEATURES_OF_HOSPITAL.map((item, index) => (
          <ContentItem
            {...item}
            flexShrink={0}
            key={index}
            mr={4}
            width={'200px'}
          />
        ))}
        <Box flexShrink={0} width={'1px'} />
      </Flex>
    </Box>
  )
}
