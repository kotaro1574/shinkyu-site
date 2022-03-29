import { Box, BoxProps } from '@chakra-ui/react'
import { TailorMadeTreatment } from '@src/components/pages/Home/Treatment/TailorMadeTreatment'
import { TreatmentContents } from '@src/components/pages/Home/Treatment/TreatmentContents'
import { Title } from '@src/components/ui/Heading/Title'

export const Treatment = (props: BoxProps) => {
  return (
    <Box textAlign={'center'} {...props}>
      <Title>施術内容</Title>
      <TailorMadeTreatment mt={6} />
      <TreatmentContents mt={6} />
    </Box>
  )
}
