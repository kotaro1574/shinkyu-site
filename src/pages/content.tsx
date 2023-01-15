import { Box } from '@chakra-ui/react'
import { AboutSection } from '@src/feature/about/component/AboutSection'
import { ConsultationHoursSection } from '@src/feature/consultationHours/component/ConsultationHoursSection'
import { IntroductionSection } from '@src/feature/introdiuction/component/IntroductionSection'
import { MainVisualSection } from '@src/feature/mainVisuals/component/mainVisualSection'
import { QuestionSection } from '@src/feature/question/component/QuestionSection'
import { TreatmentSection } from '@src/feature/treatment/component/TreatmentSection'
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
        <MainVisualSection id={'top'} />
      </Box>
      <AboutSection id={'about'} />
      <IntroductionSection id={'introduction'} />
      <TreatmentSection id={'treatment'} />
      <QuestionSection id={'question'} />
      <ConsultationHoursSection id={'hours'} />
    </Box>
  )
}
