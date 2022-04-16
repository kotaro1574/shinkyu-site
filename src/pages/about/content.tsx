import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  AspectRatio,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { ConsultationHours } from '@src/components/pages/About/ConsultationHours'
import { PractitionerIntroduction } from '@src/components/pages/About/PractitionerIntroduction'
import { Questions } from '@src/components/pages/About/Questions'
import { Image } from '@src/components/ui/Image'
import { pagesPath, staticPath } from '@src/lib/$path'
import { useRouter } from 'next/router'

export const AboutContent = () => {
  const router = useRouter()
  return (
    <Box>
      <AspectRatio h={'270px'} height={''} overflow={'hidden'} ratio={14 / 4}>
        <Image
          alt={'top_image'}
          layout={'fill'}
          src={staticPath.images.TopSlider.AdobeStock_38149832_Preview_jpeg}
        />
      </AspectRatio>
      <Breadcrumb
        bg={'black.100'}
        p={2}
        px={4}
        separator={<ChevronRightIcon color={'gray.500'} />}
        spacing={'8px'}
      >
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => router.push(pagesPath.$url())}>
            ホーム
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink isCurrentPage>当院について</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box p={8}>
        <PractitionerIntroduction as={'section'} />
        <Questions as={'section'} mt={10} />
        <ConsultationHours as={'section'} mt={10} />
      </Box>
    </Box>
  )
}
