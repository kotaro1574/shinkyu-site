import { Box, BoxProps } from '@chakra-ui/react'
import { TailorMadeTreatment } from '@src/components/pages/Home/Treatment/TailorMadeTreatment'
import { Title } from '@src/components/ui/Heading/Title'

export const Treatment = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Title>施術料金</Title>
      <TailorMadeTreatment mt={6} />
      {/*<TreatmentContents mt={6} />*/}
    </Box>
  )
}
