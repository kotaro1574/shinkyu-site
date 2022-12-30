import { Box, Center, Grid } from '@chakra-ui/react'
import { Container } from '@src/components/ui/Container/Container'
import { SectionHeading } from '@src/components/ui/SectionHeading/SectionHeading'
import { TREATMENT_DETAIL_CONTENTS } from '@src/constants/treatments'
import { TreatmentDetail } from '@src/feature/treatment/TreatmentDetail'

export const TreatmentSection = () => {
  const isOdd = (index: number) => index % 2 === 0

  return (
    <Container>
      <Center>
        <Grid
          alignItems={'center'}
          gap={10}
          maxW={'500px'}
          textAlign={'center'}
          w={'100%'}
        >
          <SectionHeading>施術について</SectionHeading>
          <Box
            fontSize={{ base: 'md', md: 'lg' }}
            lineHeight={1.8}
            textAlign={'start'}
          >
            患者さまの症状や現在の状態やご希望をしっかり問診、確認させていただきます。
            下記の施術方法より一人一人に合わせた施術を選択し、相談しながら施術していきます。
          </Box>
          <Box>1回 4,000 円(税込)</Box>
        </Grid>
      </Center>
      <Grid gap={10} pt={10}>
        {TREATMENT_DETAIL_CONTENTS.map((treatment, index) => (
          <TreatmentDetail
            description={treatment.description}
            isOdd={isOdd(index)}
            key={`treatment ${index}`}
            subTitle={treatment.subTitle}
            title={treatment.title}
          />
        ))}
      </Grid>
    </Container>
  )
}
