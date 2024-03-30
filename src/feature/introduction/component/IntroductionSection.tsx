import {
  AspectRatio,
  Box,
  BoxProps,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react'
import { InstagramButton } from '@src/components/ui/Button/InstagramButton'
import { Image } from '@src/components/ui/Image'
import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'
import { SectionHeading } from '@src/components/ui/SectionHeading/SectionHeading'
import { staticPath } from '@src/lib/$path'

type Props = BoxProps

export const IntroductionSection = ({ ...props }: Props) => {
  return (
    <Box bg={'telegram.50'} {...props}>
      <SectionContainer pb={'100px'} pt={'50px'}>
        <SectionHeading>当院について</SectionHeading>
        <Flex
          alignItems={{ base: 'center', md: 'start' }}
          flexDirection={{ base: 'column', md: 'row' }}
          gap={{ base: 4, md: 8 }}
          justifyContent={'center'}
        >
          <AspectRatio
            flexShrink={0}
            maxW={{ base: '400px', md: '500px' }}
            overflow={'hidden'}
            ratio={{ base: 5 / 3, md: 4 / 3 }}
            rounded={4}
            w={'100%'}
          >
            <Image
              alt={'director_image'}
              layout={'fill'}
              objectFit={'cover'}
              src={staticPath.images.director_image_jpg}
            />
          </AspectRatio>
          <Box maxW={'500px'}>
            <Heading
              as={'h3'}
              fontSize={{ base: '2xl', md: '5xl' }}
              lineHeight={1.2}
              mb={5}
            >
              伝統と現代の技術、最良の治療をあなたへ
            </Heading>
            <Text lineHeight={1.8} mb={4} textAlign={'justify'}>
              当院は、広島県東広島市に位置し、鍼灸、整体、産後骨盤矯正、吸い玉などの治療を組み合わせて、あなたの体調や症状に合わせたケアを提供しています。
              <br />
              当院では、痛みや不調の原因をしっかりと捉え、より効果的な治療を目指します。治療の疑問や不安な点、ご相談はお気軽にどうぞ。
              <br />
              また、日々の活動や治療情報はInstagramでも更新中。ぜひチェックしてください。
            </Text>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
              <InstagramButton />
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight={'medium'}
                textAlign={'end'}
              >
                院長 繁内俊輝
              </Text>
            </Flex>
          </Box>
        </Flex>
      </SectionContainer>
    </Box>
  )
}
