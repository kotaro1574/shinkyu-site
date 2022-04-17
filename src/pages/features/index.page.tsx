import { LayoutWithMainAndFooter } from '@src/components/layouts/LayoutWithMainAndFooter'
import { LayoutWithStickyHeaderAndMenu } from '@src/components/layouts/LayoutWithStickyHeaderAndMenu'
import { FeaturesContent } from '@src/pages/features/content'
import type { NextPageWithLayout } from 'next'

const Features: NextPageWithLayout = () => {
  return <FeaturesContent />
}

Features.getLayout = (page) => {
  return (
    <LayoutWithStickyHeaderAndMenu>
      <LayoutWithMainAndFooter>{page}</LayoutWithMainAndFooter>
    </LayoutWithStickyHeaderAndMenu>
  )
}

export default Features
