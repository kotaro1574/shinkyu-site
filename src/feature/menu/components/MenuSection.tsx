import { Box,BoxProps,Button, Center, Grid } from '@chakra-ui/react'
import { Logo } from '@src/components/ui/Logo/Logo'
import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'
import { BsFillTelephoneFill, BsLine } from 'react-icons/bs'
import { Link as Scroll } from 'react-scroll'

export const MenuSection = (props: BoxProps) => {
  return (
    <SectionContainer py={'50px'} {...props}>
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
            colorScheme={'teal'}
            leftIcon={<BsFillTelephoneFill />}
          >
            電話で予約
          </Button>
        </Center>
      </Grid>
    </SectionContainer>
  )
}
