import { Box } from '@chakra-ui/react'
import { FeaturesOfHospital } from '@src/components/pages/About/FeaturesOfHospital'
import { PractitionerIntroduction } from '@src/components/pages/About/PractitionerIntroduction'
import { Questions } from '@src/components/pages/About/Questions'

export const AboutContent = () => {
  return (
    <Box p={4}>
      <FeaturesOfHospital as={'section'} />
      <PractitionerIntroduction as={'section'} mt={10} />
      <Questions as={'section'} mt={10} />
    </Box>
  )
}
