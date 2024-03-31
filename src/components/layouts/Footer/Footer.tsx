import {
  Box,
  BoxProps,
  Flex,
  Grid,
  GridItem,
  Link,
  Text,
} from '@chakra-ui/react'
import { LineButton } from '@src/components/ui/Button/LineButton'
import { TelephoneButton } from '@src/components/ui/Button/TelephoneButton'
import { Logo } from '@src/components/ui/Logo/Logo'
import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'

type Props = BoxProps

export const Footer = ({ ...props }: Props) => {
  return (
    <Box bg={'telegram.50'} {...props}>
      <SectionContainer pb={'20px'} pos={'relative'} pt={'50px'}>
        <Grid
          gap={8}
          mb={8}
          templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2, 1fr)' }}
        >
          <GridItem mx={{ base: 'auto', md: '0' }}>
            <Box mb={5}>
              <Logo w={'255px'} />
            </Box>
            <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.8} mb={4}>
              〒739-0035
              <br />
              広島県東広島市西条町郷曽340-8
              <br />
              アルソーレ東広島6番館101号室
              <br />
              tel:080-6335-9995
            </Text>
            <Flex gap={4}>
              <LineButton />
              <TelephoneButton />
            </Flex>
          </GridItem>
          <GridItem>
            <iframe
              height={'250px'}
              loading={'lazy'}
              referrerPolicy={'no-referrer-when-downgrade'}
              src={
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.945691620884!2d132.70690271604823!3d34.37730150797549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35506e1dbc5ea3d5%3A0x70f62b95765c90a8!2z44CSNzM5LTAwMzUg5bqD5bO255yM5p2x5bqD5bO25biC6KW_5p2h55S66YO35pu977yT77yU77yQ4oiS77yYIOOCouODq-OCveODvOODrOadseW6g-WztuWFreeVqumkqCAxMDE!5e0!3m2!1sja!2sjp!4v1660450601751!5m2!1sja!2sjp'
              }
              width={'100%'}
            />
          </GridItem>
        </Grid>
        <Box pt={5}>
          <Grid
            borderStart={'black'}
            fontSize={'xs'}
            gap={{ base: 2, md: 4 }}
            templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2, 1fr)' }}
          >
            <GridItem>
              <Text textAlign={{ base: 'center', md: 'left' }}>
                <Link href={'/privacyPolicy'}>プライバシーポリシー</Link>
              </Text>
            </GridItem>
            <GridItem>
              <Text textAlign={{ base: 'center', md: 'right' }}>
                &copy;2024 繁内鍼灸治療院
              </Text>
            </GridItem>
          </Grid>
        </Box>
      </SectionContainer>
    </Box>
  )
}
