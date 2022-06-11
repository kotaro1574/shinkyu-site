import { Box } from '@chakra-ui/react'
import { About } from '@src/components/pages/Home/About'
import { TopImage } from '@src/components/pages/Home/TopImage'
import { TreatmentContents } from '@src/components/pages/Home/TreatmentContents'
import { TreatmentFee } from '@src/components/pages/Home/TreatmentFee'

export const HomeContent = () => {
  return (
    <Box>
      <TopImage />
      <Box p={8} py={4}>
        <About as={'section'} />
        <TreatmentFee as={'section'} mt={10} />
        <TreatmentContents mt={10} />
      </Box>
    </Box>
  )
}
