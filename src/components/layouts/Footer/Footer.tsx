import { Box, Center, Container, Flex, Grid } from '@chakra-ui/react'
import { Button } from '@src/components/ui/Button/Button'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'

export const Footer = () => {
  return (
    <Box as={'footer'} h={'400'} position={'relative'}>
      <Image
        alt={'footer_image'}
        layout={'fill'}
        objectFit={'cover'}
        src={staticPath.images.footer_jpg}
      />
      <Container h={'100%'} pb={4} pos={'relative'} pt={20}>
        <Center
          flexDirection={'column'}
          h={'100%'}
          justifyContent={'space-between'}
        >
          <Grid templateColumns={'repeat(2, 1fr)'}>
            <Box>
              <Box textAlign={'center'}>繁内鍼灸治療院</Box>
              <Box>
                <Box>〒739-0035</Box>
                <Box>広島県東広島市西条町郷曽340-8</Box>
                <Box>アルソーレ東広島6番館101号室</Box>
                <Box>tel:090-1111-1111</Box>
              </Box>
              <Flex alignItems={'center'} gap={4} mt={4}>
                <Button>LINEで予約</Button>
                <Button>電話で予約</Button>
              </Flex>
            </Box>
            <Box>
              <iframe
                height={'200'}
                loading={'lazy'}
                referrerPolicy={'no-referrer-when-downgrade'}
                src={
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.945691620884!2d132.70690271604823!3d34.37730150797549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35506e1dbc5ea3d5%3A0x70f62b95765c90a8!2z44CSNzM5LTAwMzUg5bqD5bO255yM5p2x5bqD5bO25biC6KW_5p2h55S66YO35pu977yT77yU77yQ4oiS77yYIOOCouODq-OCveODvOODrOadseW6g-WztuWFreeVqumkqCAxMDE!5e0!3m2!1sja!2sjp!4v1660450601751!5m2!1sja!2sjp'
                }
                width={'340'}
              />
            </Box>
          </Grid>
          <Box>©2022繁内鍼灸治療院</Box>
        </Center>
      </Container>
    </Box>
  )
}