import { Box, BoxProps, Center, Flex, Grid } from '@chakra-ui/react'
import { LineButton } from '@src/components/ui/Button/LineButton'
import { TelephoneButton } from '@src/components/ui/Button/TelephoneButton'
import { Logo } from '@src/components/ui/Logo/Logo'
import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'

type Props = BoxProps

export const Footer = ({ ...props }: Props) => {
  return (
    <Box bg={'telegram.50'} {...props}>
      <SectionContainer pos={'relative'}>
        <Center
          flexDirection={'column'}
          gap={4}
          justifyContent={'space-between'}
        >
          <Grid gap={4} templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}>
            <Box order={{ base: 2, md: 1 }}>
              <Center>
                <Logo w={'255px'} />
              </Center>
              <Box fontSize={{ base: 'md', md: 'lg' }} mt={4}>
                <Box>〒739-0035</Box>
                <Box>広島県東広島市西条町郷曽340-8</Box>
                <Box>アルソーレ東広島6番館101号室</Box>
                <Box>tel:080-6335-9995</Box>
              </Box>
              <Flex alignItems={'center'} gap={4} mt={4}>
                <LineButton />
                <TelephoneButton />
              </Flex>
            </Box>
            <Box order={{ base: 1, md: 2 }}>
              <iframe
                height={'200'}
                loading={'lazy'}
                referrerPolicy={'no-referrer-when-downgrade'}
                src={
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.945691620884!2d132.70690271604823!3d34.37730150797549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35506e1dbc5ea3d5%3A0x70f62b95765c90a8!2z44CSNzM5LTAwMzUg5bqD5bO255yM5p2x5bqD5bO25biC6KW_5p2h55S66YO35pu977yT77yU77yQ4oiS77yYIOOCouODq-OCveODvOODrOadseW6g-WztuWFreeVqumkqCAxMDE!5e0!3m2!1sja!2sjp!4v1660450601751!5m2!1sja!2sjp'
                }
                // width={{ md: '340' }}
              />
            </Box>
          </Grid>
          <Box fontSize={{ base: 'xxs', md: 'xs' }} mt={14}>
            ©2023 繁内鍼灸治療院
          </Box>
        </Center>
      </SectionContainer>
    </Box>
  )
}
