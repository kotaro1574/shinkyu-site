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
              <Link href={'/'}>
                <Logo w={'255px'} />
              </Link>
            </Box>

            <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.8} mb={4}>
              〒739-0042
              <br />
              広島県東広島市西条町西条東906-1
              <br />
              メゾン・カトレア101号室
              <br />
              TEL:080-6335-9995
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
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.101293769709!2d132.7313130129405!3d34.424182072906845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35506f8910987493%3A0x268650cddb1b4a51!2z44CSNzM5LTAwNDIg5bqD5bO255yM5p2x5bqD5bO25biC6KW_5p2h55S66KW_5p2h5p2x77yZ77yQ77yW4oiS77yRIOODoeOCvuODs-ODu-OCq-ODiOODrOOCoiAxMDE!5e0!3m2!1sja!2sjp!4v1740729479444!5m2!1sja!2sjp'
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
