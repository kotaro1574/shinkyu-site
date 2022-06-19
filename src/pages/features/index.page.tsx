import { LayoutWithHeaderAndMenu } from '@src/components/layouts/LayoutWithHeaderAndMenu'
import { LayoutWithMainAndFooter } from '@src/components/layouts/LayoutWithMainAndFooter'
import { FeaturesContent } from '@src/pages/features/content'
import type { NextPageWithLayout } from 'next'

const Features: NextPageWithLayout = () => {
  return <FeaturesContent />
}

Features.getLayout = (page) => {
  return (
    <LayoutWithHeaderAndMenu>
      <LayoutWithMainAndFooter>{page}</LayoutWithMainAndFooter>
    </LayoutWithHeaderAndMenu>
  )
}

export default Features
