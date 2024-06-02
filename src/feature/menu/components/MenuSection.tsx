import { Box, BoxProps, Center, Flex, Grid } from '@chakra-ui/react'
import { LineButton } from '@src/components/ui/Button/LineButton'
import { TelephoneButton } from '@src/components/ui/Button/TelephoneButton'
import { Logo } from '@src/components/ui/Logo/Logo'
import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'
import { Link as Scroll } from 'react-scroll'

export const MenuSection = (props: BoxProps) => {
  return (
    <SectionContainer pb={'30px'} pt={'50px'} {...props}>
      <Grid gap={8}>
        <Center>
          <Logo />
        </Center>
        <Center>
          <Flex
            flexWrap={'wrap'}
            gap={4}
            justifyContent={'center'}
            maxWidth={'968px'}
            mx={'auto'}
          >
            <Box _hover={{ opacity: '0.7' }} cursor={'pointer'}>
              <Scroll smooth duration={600} offset={-60} to={'treatment'}>
                施術について
              </Scroll>
            </Box>
            <Box _hover={{ opacity: '0.7' }} cursor={'pointer'}>
              <Scroll smooth duration={600} offset={-60} to={'price'}>
                料金表
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
          </Flex>
        </Center>
        <Center gap={4}>
          <LineButton />
          <TelephoneButton />
        </Center>
      </Grid>
    </SectionContainer>
  )
}
