import { LayoutWithMainAndFooter } from '@src/components/layouts/LayoutWithMainAndFooter'
import { LayoutWithStickyHeaderAndMenu } from '@src/components/layouts/LayoutWithStickyHeaderAndMenu'
import { LayoutWithTopImageAndBreadcrumb } from '@src/components/layouts/LayoutWithTopImageAndBreadcrumb'
import { pagesPath, staticPath } from '@src/lib/$path'
import { TreatmentsContent } from '@src/pages/treatments/content'
import type { NextPageWithLayout } from 'next'

const TREATMENTS_PAGE_BREADCRUMB = [
  {
    name: 'ホーム',
    path: pagesPath,
  },
  {
    name: '施術一覧',
    path: null,
  },
]

const Treatments: NextPageWithLayout = () => {
  return <TreatmentsContent />
}

Treatments.getLayout = (page) => {
  return (
    <LayoutWithStickyHeaderAndMenu>
      <LayoutWithTopImageAndBreadcrumb
        breadcrumb={TREATMENTS_PAGE_BREADCRUMB}
        image={staticPath.images.TopSlider.AdobeStock_38149832_Preview_jpeg}
      />
      <LayoutWithMainAndFooter>{page}</LayoutWithMainAndFooter>
    </LayoutWithStickyHeaderAndMenu>
  )
}

export default Treatments
