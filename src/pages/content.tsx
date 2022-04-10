import { Box } from '@chakra-ui/react'
import { FeaturesOfHospital } from '@src/components/pages/About/FeaturesOfHospital'
import { About } from '@src/components/pages/Home/About'
import { TopImage } from '@src/components/pages/Home/TopImage'
import { TreatmentFee } from '@src/components/pages/Home/TreatmentFee'

export const HomeContent = () => {
  return (
    <Box>
      <TopImage />
      <Box p={8} py={4}>
        <About as={'section'} />
        <FeaturesOfHospital as={'section'} mt={7} />
        <TreatmentFee as={'section'} mt={7} />
      </Box>
    </Box>
  )
}
