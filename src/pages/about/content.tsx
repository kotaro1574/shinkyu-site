import { Box } from '@chakra-ui/react'
import { PractitionerIntroduction } from '@src/components/pages/About/PractitionerIntroduction'

export const AboutContent = () => {
  return (
    <Box p={4}>
      <PractitionerIntroduction as={'section'} />
    </Box>
  )
}
