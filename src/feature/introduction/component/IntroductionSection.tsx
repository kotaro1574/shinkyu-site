import { AspectRatio, Box, BoxProps, Flex } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'
import { staticPath } from '@src/lib/$path'

type Props = BoxProps

export const IntroductionSection = ({ ...props }: Props) => {
  return (
    <Box bg={'telegram.50'} {...props}>
      <SectionContainer>
        <Flex
          alignItems={{ base: 'center', md: 'start' }}
          flexDirection={{ base: 'column', md: 'row' }}
          gap={4}
          justifyContent={'center'}
        >
          <Box
            fontSize={{ base: 'md', md: 'lg' }}
            lineHeight={1.8}
            maxW={'500px'}
            order={{ base: 2, md: 1 }}
          >
            繁内鍼灸治療院は広島県東広島市にある治療院です。鍼灸・整体・産後骨盤ケア・吸い玉を柱とし、それらを適切に組み合わせた治療を提供しております。お身体の悩み、鍼灸に関してのご相談、ご予約、お気軽にご相談ください。繁内鍼灸治療院は広島県東広島市にある治療院です。鍼灸・整体・産後骨盤ケア・吸い玉を柱とし、それらを適切に組み合わせた治療を提供しております。お身体の悩み、鍼灸に関してのご相談、ご予約、お気軽にご相談ください。
          </Box>
          <Box
            flexShrink={0}
            maxW={{ base: '500px', md: '400px' }}
            order={{ base: 1, md: 2 }}
            w={'100%'}
          >
            <AspectRatio
              overflow={'hidden'}
              ratio={{ base: 5 / 3, md: 4 / 3 }}
              rounded={2}
            >
              <Image
                alt={'director_image'}
                layout={'fill'}
                objectFit={'cover'}
                src={staticPath.images.director_image_jpg}
              />
            </AspectRatio>
            <Box
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight={'medium'}
              mt={1}
              textAlign={'end'}
            >
              院長 繁内俊輝
            </Box>
          </Box>
        </Flex>
      </SectionContainer>
    </Box>
  )
}
