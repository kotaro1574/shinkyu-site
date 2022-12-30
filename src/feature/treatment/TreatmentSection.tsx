import { Box, Center, Container, Grid, Heading } from '@chakra-ui/react'
import { TREATMENT_DETAIL_CONTENTS } from '@src/constants/treatments'
import { TreatmentDetail } from '@src/feature/treatment/TreatmentDetail'

export const TreatmentSection = () => {
  const isOdd = (index: number) => index % 2 === 0

  return (
    <Container py={{ base: 5, md: 10 }}>
      <Center>
        <Grid
          alignItems={'center'}
          gap={10}
          maxW={'500px'}
          textAlign={'center'}
          w={'100%'}
        >
          <Heading fontSize={{ base: '4xl', md: '7xl', sm: '5xl' }}>
            施術について
          </Heading>
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
