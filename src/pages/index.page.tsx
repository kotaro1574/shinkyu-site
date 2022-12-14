import { HomeContent } from '@src/pages/content'
import type { NextPageWithLayout } from 'next'

const Home: NextPageWithLayout = () => {
  return <HomeContent />
}

Home.getLayout = (page) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{page}</>
}

export default Home
