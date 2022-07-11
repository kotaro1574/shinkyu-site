import { Box } from '@chakra-ui/react'
import { LayoutWithTopImageAndBreadcrumb } from '@src/components/layouts/LayoutWithTopImageAndBreadcrumb'
import { ConsultationHours } from '@src/components/pages/About/ConsultationHours'
import { PractitionerIntroduction } from '@src/components/pages/About/PractitionerIntroduction'
import { Questions } from '@src/components/pages/About/Questions'
import { HomeIcon } from '@src/components/ui/Icon/HomeIcon/HomeIcon'
import { pagesPath, staticPath } from '@src/lib/$path'
import { useRouter } from 'next/router'

export const AboutContent = () => {
  const router = useRouter()
  const ABOUT_PAGE_BREADCRUMB = [
    {
      content: <HomeIcon h={5} verticalAlign={'sub'} w={5} />,
      isCurrentPage: false,
      onClick: () => router.push(pagesPath.$url()),
    },
    {
      content: '当院について',
      isCurrentPage: true,
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
