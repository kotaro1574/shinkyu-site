import { Box } from '@chakra-ui/react'
import { FeaturesOfHospital } from '@src/components/pages/About/FeaturesOfHospital'
import { About } from '@src/components/pages/Home/About'
import { TopImage } from '@src/components/pages/Home/TopImage'
import { Treatment } from '@src/components/pages/Home/Treatment'

export const HomeContent = () => {
  return (
    <Box>
      <TopImage />
      <Box p={8} py={4}>
        <About as={'section'} />
        <FeaturesOfHospital as={'section'} mt={7} />
        <Treatment as={'section'} mt={7} />
      </Box>
    </Box>
  )
}
