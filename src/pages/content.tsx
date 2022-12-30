import { Box } from '@chakra-ui/react'
import { AboutSection } from '@src/feature/about/AboutSection'
import { ConsultationHoursSection } from '@src/feature/consultationHours/ConsultationHoursSection'
import { IntroductionSection } from '@src/feature/introdiuction/IntroductionSection'
import { MainVisualSection } from '@src/feature/mainVisuals/mainVisualSection'
import { QuestionSection } from '@src/feature/question/QuestionSection'
import { TreatmentSection } from '@src/feature/treatment/TreatmentSection'
import { useGetElementProperty } from '@src/hooks/useGetElementProperty'
import { useOverViewHeightContext } from '@src/provider/overViewHeight'
import { useEffect, useRef } from 'react'

export const HomeContent = () => {
  const targetRef = useRef(null)
  const { getElementProperty } =
    useGetElementProperty<HTMLDivElement>(targetRef)
  const { setOverviewHeight } = useOverViewHeightContext()

  useEffect(() => {
    setOverviewHeight(getElementProperty('height'))
  }, [getElementProperty, setOverviewHeight])

  return (
    <Box>
      <Box ref={targetRef}>
        <MainVisualSection />
      </Box>
      <AboutSection />
      <IntroductionSection />
      <TreatmentSection />
      <QuestionSection />
      <ConsultationHoursSection />
    </Box>
  )
}
