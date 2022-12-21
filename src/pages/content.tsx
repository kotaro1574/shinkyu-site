import { AspectRatio, Box } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { AboutSection } from '@src/feature/about/AboutSection'
import { ConsultationHoursSection } from '@src/feature/consultationHours/ConsultationHoursSection'
import { IntroductionSection } from '@src/feature/introdiuction/IntroductionSection'
import { QuestionSection } from '@src/feature/question/QuestionSection'
import { TreatmentSection } from '@src/feature/treatment/TreatmentSection'

export const HomeContent = () => {
  return (
    <Box>
      <AspectRatio h={'700px'} ratio={16 / 9}>
        <Image
          alt={'top_image'}
          layout={'fill'}
          src={'https://source.unsplash.com/random'}
        />
      </AspectRatio>
      <AboutSection />
      <IntroductionSection />
      <TreatmentSection />
      <QuestionSection />
      <ConsultationHoursSection />
    </Box>
  )
}
