import { Box, BoxProps } from '@chakra-ui/react'
import { TailorMadeTreatment } from '@src/components/pages/Home/Treatment/TailorMadeTreatment'
import { TreatmentContents } from '@src/components/pages/Home/Treatment/TreatmentContents'
import { Title } from '@src/components/ui/Heading/Title'

export const Treatment = (props: BoxProps) => {
  return (
    <Box mt={10} textAlign={'center'} {...props}>
      <Title>当院の施術</Title>
      <TailorMadeTreatment mt={6} />
      <TreatmentContents mt={6} />
    </Box>
  )
}
