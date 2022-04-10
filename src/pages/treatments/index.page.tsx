import { LayoutWithMainAndFooter } from '@src/components/layouts/LayoutWithMainAndFooter'
import { LayoutWithStickyHeaderAndMenu } from '@src/components/layouts/LayoutWithStickyHeaderAndMenu'
import { TreatmentsContent } from '@src/pages/treatments/content'
import type { NextPageWithLayout } from 'next'

const Treatments: NextPageWithLayout = () => {
  return <TreatmentsContent />
}

Treatments.getLayout = (page) => {
  return (
    <LayoutWithStickyHeaderAndMenu>
      <LayoutWithMainAndFooter>{page}</LayoutWithMainAndFooter>
    </LayoutWithStickyHeaderAndMenu>
  )
}

export default Treatments
