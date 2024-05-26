'use client'

import dynamic from 'next/dynamic'
import { Box } from '@chakra-ui/react'
import { BaseLayout } from '@src/components/layouts/BaseLayout/BaseLayout'
import { ConsultationHoursSection } from '@src/feature/consultationHours/component/ConsultationHoursSection'
import { IntroductionSection } from '@src/feature/introduction/component/IntroductionSection'
import { MenuSection } from '@src/feature/menu/components/MenuSection'
import { PriceSection } from '@src/feature/price/component/PriceSection'
import { QuestionSection } from '@src/feature/question/component/QuestionSection'
import { TreatmentSection } from '@src/feature/treatment/component/TreatmentSection'
import { useGetElementProperty } from '@src/hooks/useGetElementProperty'
import { useOverViewHeightContext } from '@src/provider/overViewHeight'
import { useEffect, useRef } from 'react'

const DynamicMainVisual = dynamic(
  () => import('@src/feature/mainVisuals/component/mainVisualSection'),
  {
    loading: () => <p>Loading...</p>,
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
          <Box id="top">
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
