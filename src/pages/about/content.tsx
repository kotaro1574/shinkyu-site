import { Box } from '@chakra-ui/react'
import { LayoutWithTopImageAndBreadcrumb } from '@src/components/layouts/LayoutWithTopImageAndBreadcrumb'
import { ConsultationHours } from '@src/components/pages/About/ConsultationHours'
import { PractitionerIntroduction } from '@src/components/pages/About/PractitionerIntroduction'
import { Questions } from '@src/components/pages/About/Questions'
import { pagesPath, staticPath } from '@src/lib/$path'
import { useRouter } from 'next/router'

export const AboutContent = () => {
  const router = useRouter()
  const ABOUT_PAGE_BREADCRUMB = [
    {
      isCurrentPage: false,
      name: 'ホーム',
      onClick: () => router.push(pagesPath.$url()),
    },
    {
      isCurrentPage: true,
      name: '当院について',
    },
  ]
  return (
    <Box>
      <LayoutWithTopImageAndBreadcrumb
        breadcrumb={ABOUT_PAGE_BREADCRUMB}
        image={staticPath.natsumi.about_top_jpg}
      />
      <Box p={8}>
        <PractitionerIntroduction as={'section'} />
        <Questions as={'section'} mt={10} />
        <ConsultationHours as={'section'} mt={10} />
      </Box>
    </Box>
  )
}
