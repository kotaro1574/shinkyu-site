import { Box } from '@chakra-ui/react'
import { LayoutWithTopImageAndBreadcrumb } from '@src/components/layouts/LayoutWithTopImageAndBreadcrumb'
import { ContentItem } from '@src/components/ui/Content/ContentItem'
import { Title } from '@src/components/ui/Heading/Title'
import { pagesPath, staticPath } from '@src/lib/$path'
import { useRouter } from 'next/router'

const ACUPUNCTURE_AND_MOXIBUSTION_CONTENTS = [
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

export const FeaturesContent = () => {
  const router = useRouter()

  const FEATURES_PAGE_BREADCRUMB = [
    {
      isCurrentPage: false,
      name: 'ホーム',
      onClick: () => router.push(pagesPath.$url()),
    },
    {
      isCurrentPage: true,
      name: '当院の特徴',
    },
  ]
  return (
    <Box>
      <LayoutWithTopImageAndBreadcrumb
        breadcrumb={FEATURES_PAGE_BREADCRUMB}
        image={staticPath.images.TopSlider.AdobeStock_207377054_Preview_jpeg}
      />
      <Box p={8} pt={6}>
        <Title>鍼灸</Title>
        {ACUPUNCTURE_AND_MOXIBUSTION_CONTENTS.map((item, index) => (
          <ContentItem {...item} key={`${item.title}_${index}`} mt={10} />
        ))}
      </Box>
    </Box>
  )
}
