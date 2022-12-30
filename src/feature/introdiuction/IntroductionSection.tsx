import { AspectRatio, Box, Center, Container } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'

export const IntroductionSection = () => {
  return (
    <Box as={'section'} bg={'#f4fbfc'}>
      <Container py={10}>
        <Center alignItems={'start'} gap={4}>
          <Box lineHeight={1.7} maxW={'300px'}>
            繁内鍼灸治療院は広島県東広島市にある治療院です。鍼灸・整体・産後骨盤ケア・吸い玉を柱とし、それらを適切に組み合わせた治療を提供しております。お身体の悩み、鍼灸に関してのご相談、ご予約、お気軽にご相談ください。
          </Box>
          <Box>
            <AspectRatio
              h={'200px'}
              overflow={'hidden'}
              ratio={4 / 3}
              rounded={4}
              w={'300px'}
            >
              <Image
                alt={'director_image'}
                layout={'fill'}
                src={staticPath.images.introduction.director_image_jpg}
              />
            </AspectRatio>
            <Box mt={1} textAlign={'end'}>
              院長 繁内俊輝
            </Box>
          </Box>
        </Center>
      </Container>
    </Box>
  )
}
