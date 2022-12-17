import { BaseLayout } from '@src/components/layouts/BaseLayout/BaseLayout'
import { HomeContent } from '@src/pages/content'
import type { NextPageWithLayout } from 'next'

const Home: NextPageWithLayout = () => {
  return <HomeContent />
}

Home.getLayout = (page) => {
  return <BaseLayout>{page}</BaseLayout>
}

export default Home
