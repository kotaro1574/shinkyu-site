import { LayoutWithHeaderAndMenu } from '@src/components/layouts/LayoutWithHeaderAndMenu'
import { LayoutWithMainAndFooter } from '@src/components/layouts/LayoutWithMainAndFooter'
import { TreatmentsContent } from '@src/pages/treatments/content'
import type { NextPageWithLayout } from 'next'

const Treatments: NextPageWithLayout = () => {
  return <TreatmentsContent />
}

Treatments.getLayout = (page) => {
  return (
    <LayoutWithHeaderAndMenu>
      <LayoutWithMainAndFooter>{page}</LayoutWithMainAndFooter>
    </LayoutWithHeaderAndMenu>
  )
}

export default Treatments
