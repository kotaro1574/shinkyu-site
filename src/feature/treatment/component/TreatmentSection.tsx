import { Box, BoxProps, Grid, Text } from '@chakra-ui/react'
import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'
import { SectionHeading } from '@src/components/ui/SectionHeading/SectionHeading'
import { TreatmentDetail } from '@src/feature/treatment/component/TreatmentDetail'
import { TREATMENT_DETAIL_CONTENTS } from '@src/feature/treatment/constant'

type Props = BoxProps

export const TreatmentSection = ({ ...props }: Props) => {
  const isOdd = (index: number) => index % 2 === 0

  return (
    <SectionContainer pb={'100px'} w={'100%'} {...props}>
      <SectionHeading>施術について</SectionHeading>
      <Box lineHeight={1.8} maxW={'500px'} mx={'auto'}>
        <Text mb={5} textAlign={'justify'}>
          患者さまの症状や現在の状態やご希望をしっかり問診、確認させていただきます。
          下記の施術方法より一人一人に合わせた施術を選択し、相談しながら施術していきます。
        </Text>
      </Box>
      <Grid gap={{ base: 10, md: 16 }} pt={{ base: 10, md: 16 }}>
        {TREATMENT_DETAIL_CONTENTS.map((treatment, index) => (
          <TreatmentDetail
            description={treatment.description}
            imagePath={treatment.imagePath}
            isOdd={isOdd(index)}
            key={`treatment ${index}`}
            price={treatment.price}
            subTitle={treatment.subTitle}
            title={treatment.title}
          />
        ))}
      </Grid>
    </SectionContainer>
  )
}
