import { LayoutWithHeaderAndMenu } from '@src/components/layouts/LayoutWithHeaderAndMenu'
import { LayoutWithMainAndFooter } from '@src/components/layouts/LayoutWithMainAndFooter'
import { AboutContent } from '@src/pages/about/content'
import type { NextPageWithLayout } from 'next'

const About: NextPageWithLayout = () => {
  return <AboutContent />
}

About.getLayout = (page) => {
  return (
    <LayoutWithHeaderAndMenu>
      <LayoutWithMainAndFooter>{page}</LayoutWithMainAndFooter>
    </LayoutWithHeaderAndMenu>
  )
}

export default About
