import { Box } from '@chakra-ui/react'
import { ConsultationHours } from '@src/components/pages/About/ConsultationHours'
import { PractitionerIntroduction } from '@src/components/pages/About/PractitionerIntroduction'
import { Questions } from '@src/components/pages/About/Questions'

export const AboutContent = () => {
  return (
    <Box p={4}>
      <PractitionerIntroduction as={'section'} />
      <Questions as={'section'} mt={10} />
      <ConsultationHours as={'section'} mt={10} />
    </Box>
  )
}
