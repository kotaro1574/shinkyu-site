import { Box } from '@chakra-ui/react'
import { LayoutWithTopImageAndBreadcrumb } from '@src/components/layouts/LayoutWithTopImageAndBreadcrumb'
import { pagesPath, staticPath } from '@src/lib/$path'
import { useRouter } from 'next/router'

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
      けろ
    </Box>
  )
}
