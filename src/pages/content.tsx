import { AspectRatio, Box } from '@chakra-ui/react'
import { AboutSection } from '@src/components/page/home/AboutSection/AboutSection'
import { ConsultationHoursSection } from '@src/components/page/home/ConsultationHoursSection/ConsultationHoursSection'
import { IntroductionSection } from '@src/components/page/home/IntroductionSection/IntroductionSection'
import { TreatmentSection } from '@src/components/page/home/TreatmentSection/TreatmentSection'
import { Image } from '@src/components/ui/Image'

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
      <ConsultationHoursSection />
    </Box>
  )
}
