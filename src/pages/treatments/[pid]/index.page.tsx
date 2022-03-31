import { LayoutWithMainAndFooter } from '@src/components/layouts/LayoutWithMainAndFooter'
import { LayoutWithStickyHeaderAndMenu } from '@src/components/layouts/LayoutWithStickyHeaderAndMenu'
import { TreatmentContent } from '@src/pages/treatments/[pid]/content'
import type { NextPageWithLayout } from 'next'

const Treatment: NextPageWithLayout = () => {
  return <TreatmentContent />
}

Treatment.getLayout = (page) => {
  return (
    <LayoutWithStickyHeaderAndMenu>
      <LayoutWithMainAndFooter>{page}</LayoutWithMainAndFooter>
    </LayoutWithStickyHeaderAndMenu>
  )
}

export default Treatment
