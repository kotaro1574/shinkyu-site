import { Box, Heading } from '@chakra-ui/react'
import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'
import { AboutSection } from '@src/feature/about/components/AboutSection'
import { ConsultationHoursSection } from '@src/feature/consultationHours/component/ConsultationHoursSection'
import { IntroductionSection } from '@src/feature/introduction/component/IntroductionSection'
import { MainVisualSection } from '@src/feature/mainVisuals/component/mainVisualSection'
import { MenuSection } from '@src/feature/menu/components/MenuSection'
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
      <MenuSection id={'menu'} />
      <AboutSection id={'about'} />
      <TreatmentSection id={'treatment'} />
      <IntroductionSection id={'introduction'} />
      <QuestionSection id={'question'} />
      <ConsultationHoursSection id={'hours'} />
    </Box>
  )
}
