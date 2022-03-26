import { LayoutWithStickyHeaderAndMenu } from '@src/components/layouts/LayoutWithStickyHeaderAndMenu'
import { HomeContent } from '@src/pages/content'
import type { NextPageWithLayout } from 'next'

const Home: NextPageWithLayout = () => {
  return <HomeContent />
}

Home.getLayout = (page) => {
  return <LayoutWithStickyHeaderAndMenu>{page}</LayoutWithStickyHeaderAndMenu>
}

export default Home
