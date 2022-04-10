import {
  AspectRatio,
  Box,
  BoxProps,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react'
import { SubTitle } from '@src/components/ui/Heading/SubTitle'
import { Title } from '@src/components/ui/Heading/Title'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'

export const TreatmentFee = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Title>施術料金</Title>
      <Box mt={4}>
        <AspectRatio
          mx={'auto'}
          overflow={'hidden'}
          ratio={16 / 8}
          rounded={'sm'}
        >
          <Image
            alt={'top_image'}
            layout={'fill'}
            src={
              staticPath.images.Treatment.TailorMadeTreatment
                .AdobeStock_416225254_Preview_jpeg
            }
          />
        </AspectRatio>
        <SubTitle mt={4}>一人一人に合わせたオーダーメイドの治療</SubTitle>
        <Text fontSize={'sm'} mt={4}>
          患者様の症状や全身の状態をしっかり問診・確認させていただき、患者様一人一人に合わせた施術を行います。
          <br />
          施術方法によって追加料金などは発生致しませんのでご安心ください。（価格は税込みとなります。）
        </Text>
        <Flex
          alignItems={'flex-end'}
          bg={'black.100'}
          borderColor={'line.light'}
          borderWidth={1}
          justify={'space-between'}
          mt={4}
          p={4}
          rounded={'sm'}
        >
          <Box fontSize={'sm'}>治療 (60分程度)</Box>
          <Flex alignItems={'flex-end'}>
            <Heading as={'h4'}>4,000円</Heading>
            <Text fontSize={'xxs'}>(税込み)</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
