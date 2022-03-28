import {
  AspectRatio,
  Box,
  BoxProps,
  Divider,
  Flex,
  Grid,
  Heading,
  Text,
} from '@chakra-ui/react'
import { SubTitle } from '@src/components/ui/Heading/SubTitle'
import { Title } from '@src/components/ui/Heading/Title'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'

export const Treatment = (props: BoxProps) => {
  return (
    <Box mt={10} textAlign={'center'} {...props}>
      <Title>当院の施術</Title>
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
      <Box mt={6}>
        <SubTitle>施術内容一覧</SubTitle>
        <Text fontSize={'sm'} mt={4}>
          症状や現在の状態・ご希望を来院時にしっかり問診させていただき、患者様に最適なプランを提案させていただきます。
        </Text>
        <Grid gap={4} mt={4} templateColumns={'repeat(2, 1fr)'}>
          {Array.from({ length: 5 }).map((item, index) => (
            <AspectRatio
              key={index}
              overflow={'hidden'}
              ratio={150 / 120}
              rounded={'sm'}
            >
              <Image
                alt={'top_image'}
                layout={'fill'}
                src={staticPath.images.top1_jpg}
              />
            </AspectRatio>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
