'use client'

import { AspectRatio, Box } from '@chakra-ui/react'
import { BaseLayout } from '@src/components/layouts/BaseLayout/BaseLayout'
import { Image } from '@src/components/ui/Image'
import { ConsultationHoursSection } from '@src/feature/consultationHours/component/ConsultationHoursSection'
import { IntroductionSection } from '@src/feature/introduction/component/IntroductionSection'
import { MenuSection } from '@src/feature/menu/components/MenuSection'
import { PriceSection } from '@src/feature/price/component/PriceSection'
import { QuestionSection } from '@src/feature/question/component/QuestionSection'
import { TreatmentSection } from '@src/feature/treatment/component/TreatmentSection'
import { useGetElementProperty } from '@src/hooks/useGetElementProperty'
import { useOverViewHeightContext } from '@src/provider/overViewHeight'
import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'

const DynamicMainVisual = dynamic(
  () => import('@src/feature/mainVisuals/component/mainVisualSection'),
  {
    loading: () => (
      <AspectRatio
        h={{ base: '300px', lg: '450px', md: '350px' }}
        maxWidth={'968px'}
        mx={'auto'}
        overflow={'hidden'}
        roundedBottom={{ sm: 4 }}
      >
        <Image
          fill
          alt={'top_image'}
          sizes={'100%'}
          src={'/images/mainVisual1.jpg'}
          style={{
            objectFit: 'cover',
          }}
        />
      </AspectRatio>
    ),
    ssr: false,
  }
)

export default function Home() {
  const targetRef = useRef(null)
  const { getElementProperty } =
    useGetElementProperty<HTMLDivElement>(targetRef)
  const { setOverviewHeight } = useOverViewHeightContext()

  useEffect(() => {
    setOverviewHeight(getElementProperty('height'))
  }, [getElementProperty, setOverviewHeight])

  return (
    <BaseLayout>
      <Box>
        <Box ref={targetRef}>
          <Box id={'top'}>
            <DynamicMainVisual />
          </Box>
          <MenuSection id={'menu'} />
        </Box>
        <TreatmentSection id={'treatment'} />
        <PriceSection id={'price'} />
        <IntroductionSection id={'introduction'} />
        <QuestionSection id={'question'} />
        <ConsultationHoursSection id={'hours'} />
      </Box>
    </BaseLayout>
  )
}
