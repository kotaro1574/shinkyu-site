import { LayoutWithHeaderAndMenu } from '@src/components/layouts/LayoutWithHeaderAndMenu'
import { LayoutWithMainAndFooter } from '@src/components/layouts/LayoutWithMainAndFooter'
import { HomeContent } from '@src/pages/content'
import type { NextPageWithLayout } from 'next'

const Home: NextPageWithLayout = () => {
  return <HomeContent />
}

Home.getLayout = (page) => {
  return (
    <LayoutWithHeaderAndMenu>
      <LayoutWithMainAndFooter>{page}</LayoutWithMainAndFooter>
    </LayoutWithHeaderAndMenu>
  )
}

export default Home
