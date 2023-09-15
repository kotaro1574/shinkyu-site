import { Box, Button, Center, Flex, Grid, Heading } from '@chakra-ui/react'
import { Logo } from '@src/components/ui/Logo/Logo'
import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'
import { ConsultationHoursSection } from '@src/feature/consultationHours/component/ConsultationHoursSection'
import { IntroductionSection } from '@src/feature/introduction/component/IntroductionSection'
import { MainVisualSection } from '@src/feature/mainVisuals/component/mainVisualSection'
import { QuestionSection } from '@src/feature/question/component/QuestionSection'
import { TreatmentSection } from '@src/feature/treatment/component/TreatmentSection'
import { useGetElementProperty } from '@src/hooks/useGetElementProperty'
import { useOverViewHeightContext } from '@src/provider/overViewHeight'
import { useEffect, useRef } from 'react'
import { BsFillTelephoneFill, BsLine } from 'react-icons/bs'
import { Link as Scroll } from 'react-scroll'

export const HomeContent = () => {
  const targetRef = useRef(null)
  const { getElementProperty } =
    useGetElementProperty<HTMLDivElement>(targetRef)
  const { setOverviewHeight } = useOverViewHeightContext()

  useEffect(() => {
    setOverviewHeight(getElementProperty('height'))
  }, [getElementProperty, setOverviewHeight])

  return (
    <Box>
      <Box ref={targetRef}>
        <MainVisualSection id={'top'} />
      </Box>
      <SectionContainer py={'50px'}>
        <Grid gap={8}>
          <Center>
            <Logo />
          </Center>
          <Center display={{ base: 'none', md: 'flex' }} gap={4}>
            <Box _hover={{ opacity: '0.7' }} cursor={'pointer'}>
              <Scroll smooth duration={600} offset={-60} to={'treatment'}>
                施術について
              </Scroll>
            </Box>
            <Box _hover={{ opacity: '0.7' }} cursor={'pointer'}>
              <Scroll smooth duration={600} offset={-60} to={'introduction'}>
                当院について
              </Scroll>
            </Box>
            <Box _hover={{ opacity: '0.7' }} cursor={'pointer'}>
              <Scroll smooth duration={600} offset={-60} to={'question'}>
                よくある質問
              </Scroll>
            </Box>
            <Box _hover={{ opacity: '0.7' }} cursor={'pointer'}>
              <Scroll smooth duration={600} offset={-60} to={'hours'}>
                診療時間
              </Scroll>
            </Box>
          </Center>
          <Center gap={4}>
            <Button
              bgColor={'green.line'}
              color={'white'}
              colorScheme={'green'}
              leftIcon={<BsLine />}
            >
              LINEで予約
            </Button>
            <Button
              bgColor={'teal.400'}
              color={'white'}
              colorScheme={"teal"}
              leftIcon={<BsFillTelephoneFill />}
            >
              電話で予約
            </Button>
          </Center>
        </Grid>
      </SectionContainer>
      <SectionContainer>
        <Heading
          fontSize={{ base: '2xl', md: '7xl', sm: '4xl' }}
          lineHeight={2}
          textAlign={'center'}
        >
          よりよい生活が送れるように
          <br />
          患者様
          <Box as={'span'} color={'teal.400'}>
            ひとりひとり
          </Box>
          に適した
          <br />
          サービスを提供する
        </Heading>
      </SectionContainer>

      <TreatmentSection id={'treatment'} />
      <IntroductionSection id={'introduction'} />
      <QuestionSection id={'question'} />
      <ConsultationHoursSection id={'hours'} />
    </Box>
  )
}
