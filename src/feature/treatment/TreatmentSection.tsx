import { Box, Center, chakra, Divider, Grid, Text } from '@chakra-ui/react'
import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'
import { SectionHeading } from '@src/components/ui/SectionHeading/SectionHeading'
import { TREATMENT_DETAIL_CONTENTS } from '@src/constants/treatments'
import { TreatmentDetail } from '@src/feature/treatment/TreatmentDetail'

export const TreatmentSection = () => {
  const isOdd = (index: number) => index % 2 === 0

  return (
    <SectionContainer>
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
          <Box>
            <Text fontWeight={'medium'}>
              1回
              <chakra.span fontSize={'6xl'} fontWeight={'bold'} ml={4}>
                4,000
              </chakra.span>
              円(税込)
            </Text>
            <Divider
              borderColor={'black'}
              maxW={'210px'}
              mx={'auto'}
              my={0}
              opacity={1}
            />
          </Box>
        </Grid>
      </Center>
      <Grid gap={{ base: 10, md: 20 }} pt={{ base: 10, md: 20 }}>
        {TREATMENT_DETAIL_CONTENTS.map((treatment, index) => (
          <TreatmentDetail
            description={treatment.description}
            imagePath={treatment.imagePath}
            isOdd={isOdd(index)}
            key={`treatment ${index}`}
            subTitle={treatment.subTitle}
            title={treatment.title}
          />
        ))}
      </Grid>
    </SectionContainer>
  )
}
