import {
  Box,
  BoxProps,
  Center,
  chakra,
  Divider,
  Grid,
  Text,
} from '@chakra-ui/react'
import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'
import { SectionHeading } from '@src/components/ui/SectionHeading/SectionHeading'
import { TreatmentDetail } from '@src/feature/treatment/component/TreatmentDetail'
import { TREATMENT_DETAIL_CONTENTS } from '@src/feature/treatment/constant'

type Props = BoxProps

export const TreatmentSection = ({ ...props }: Props) => {
  const isOdd = (index: number) => index % 2 === 0

  return (
    <SectionContainer pb={'150px'} {...props}>
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
            <Text fontWeight={'bold'}>
              1回
              <chakra.span fontSize={'9xl'} ml={4} mr={2}>
                4,000
              </chakra.span>
              円(税込)
            </Text>
            <Divider borderColor={'black'} maxW={'300px'} mx={'auto'} my={0} />
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
