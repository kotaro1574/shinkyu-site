import { Box, BoxProps } from '@chakra-ui/react'
import { FeaturesOfHospitalItem } from '@src/components/pages/About/FeaturesOfHospital/FeaturesOfHospitalItem'
import { Title } from '@src/components/ui/Heading/Title'
import { FeatureOfHospital } from '@src/pages/about/content'

type Props = {
  feature: FeatureOfHospital[]
} & BoxProps

export const FeaturesOfHospital = ({ feature, ...boxProps }: Props) => {
  return (
    <Box {...boxProps}>
      <Title>当院の特徴</Title>
      {feature.map((item, index) => (
        <FeaturesOfHospitalItem {...item} key={index} mt={6} />
      ))}
    </Box>
  )
}
