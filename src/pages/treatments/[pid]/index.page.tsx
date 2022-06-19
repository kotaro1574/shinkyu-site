import { LayoutWithHeaderAndMenu } from '@src/components/layouts/LayoutWithHeaderAndMenu'
import { LayoutWithMainAndFooter } from '@src/components/layouts/LayoutWithMainAndFooter'
import { TreatmentContent } from '@src/pages/treatments/[pid]/content'
import type { NextPageWithLayout } from 'next'

const Treatment: NextPageWithLayout = () => {
  return <TreatmentContent />
}

Treatment.getLayout = (page) => {
  return (
    <LayoutWithHeaderAndMenu>
      <LayoutWithMainAndFooter>{page}</LayoutWithMainAndFooter>
    </LayoutWithHeaderAndMenu>
  )
}

export default Treatment
