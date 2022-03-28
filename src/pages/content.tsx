import { Box } from '@chakra-ui/react'
import { About } from '@src/components/pages/Home/About'
import { TopImage } from '@src/components/pages/Home/TopImage'
import { Treatment } from '@src/components/pages/Home/Treatment'

export const HomeContent = () => {
  return (
    <Box>
      <TopImage />
      <Box p={4}>
        <About as={'section'} />
        <Treatment as={'section'} mt={10} />
      </Box>
    </Box>
  )
}
