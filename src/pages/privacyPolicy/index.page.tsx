import { BaseLayout } from '@src/components/layouts/BaseLayout/BaseLayout'
import { PrivacyPolicyContent } from '@src/pages/privacyPolicy/content'
import { NextPageWithLayout } from 'next'
import React from 'react'

const privacyPolicy: NextPageWithLayout = () => {
  return <PrivacyPolicyContent />
}

privacyPolicy.getLayout = (page) => {
  return <BaseLayout>{page}</BaseLayout>
}

export default privacyPolicy
