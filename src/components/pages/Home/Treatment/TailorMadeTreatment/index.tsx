import {
  AspectRatio,
  Box,
  BoxProps,
  Divider,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react'
import { SubTitle } from '@src/components/ui/Heading/SubTitle'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'

export const TailorMadeTreatment = (props: BoxProps) => {
  return (
    <Box {...props}>
      <AspectRatio
        mx={'auto'}
        overflow={'hidden'}
        ratio={16 / 8}
        rounded={'sm'}
      >
        <Image
          alt={'top_image'}
          layout={'fill'}
          src={staticPath.images.section1_1_png}
        />
      </AspectRatio>
      <SubTitle mt={2}>一人一人に合わせたオーダーメイドの治療</SubTitle>
      <Text fontSize={'sm'} mt={2}>
        患者様の症状や全身の状態をしっかり問診・確認させていただき、患者様一人一人に合わせた施術を行います。
        <br />
        施術方法によって追加料金などは発生致しませんのでご安心ください。（価格は税込みとなります。）
      </Text>
      <Divider borderColor={'test.900'} mb={2} mt={4} />
      <Flex alignItems={'flex-end'} justify={'space-between'}>
        <Box fontSize={'sm'}>治療 (60分程度)</Box>
        <Flex alignItems={'flex-end'}>
          <Heading as={'h4'}>4,000円</Heading>
          <Text fontSize={'xxs'}>（税込み）</Text>
        </Flex>
      </Flex>
      <Divider borderColor={'test.900'} mb={4} mt={2} />
    </Box>
  )
}