import { Icon, TriangleUpIcon } from '@chakra-ui/icons'
import {
  AspectRatio,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Text,
} from '@chakra-ui/react'
import { TopImage } from '@src/components/pages/Home/TopImage'
import { BeautyAcupunctureCard } from '@src/components/ui/Card/BeautyAcupunctureCard'
import { Image } from '@src/components/ui/Image'
import { Title } from '@src/components/ui/Title'
import { staticPath } from '@src/lib/$path'

// const FEATURES_OF_HOSPITAL = [
//   {
//     content:
//       '治療を行う前に、問診、全身の状態を確認していき患者様ひとりひとりの身体にあった施術を提供させていただきます。',
//     image: staticPath.images.section1_1_png,
//     title: '一人一人に合った施術',
//   },
//   {
//     content:
//       '当院の鍼灸治療で使用する針は すべて使い捨てです。 感染症の心配もありません。',
//     image: staticPath.images.section1_2_JPG,
//     title: '安心安全な施術',
//   },
//   {
//     content:
//       '当院は完全予約制です。 プラベートな空間でご症状について 安心してご相談ください。',
//     image: staticPath.images.secttion1_3_JPG,
//     title: 'プライベートな空間で',
//   },
// ]

export const HomeContent = () => {
  return (
    <Box>
      <TopImage />
      <Box p={4}>
        <Grid as={'section'} gap={4}>
          <Text fontSize={'sm'} textAlign={'center'}>
            東広島市西条
            <br />
            鍼灸・整体・産後骨盤矯正・吸い玉
            <br />
            交通事故治療・各種保険扱い
          </Text>
          <Button
            bg={'test.900'}
            color={'white'}
            fontSize={'sm'}
            fontWeight={'medium'}
            h={'35px'}
            maxW={'170px'}
            mx={'auto'}
            rightIcon={<Icon as={TriangleUpIcon} transform={'rotate(90deg)'} />}
          >
            詳しくはこちら
          </Button>
          <BeautyAcupunctureCard />
        </Grid>
        <Box mt={10} textAlign={'center'}>
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
            <Heading
              as={'h3'}
              color={'test.900'}
              fontSize={'lg'}
              fontWeight={'medium'}
              mt={2}
            >
              一人一人に合わせたオーダーメイドの治療
            </Heading>
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
            <Heading
              as={'h3'}
              color={'test.900'}
              fontSize={'lg'}
              fontWeight={'medium'}
            >
              施術内容一覧
            </Heading>
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
        {/*  <Box as={'section'} mt={10}>*/}
        {/*    <Title title={'当院の特徴'} />*/}
        {/*    {FEATURES_OF_HOSPITAL.map((item, index) => (*/}
        {/*      <FeaturesOfHospital*/}
        {/*        mt={6}*/}
        {/*        {...item}*/}
        {/*        key={`FeaturesOfHospital-${index}`}*/}
        {/*      />*/}
        {/*    ))}*/}
        {/*  </Box>*/}
        {/*  <Box as={'section'} mt={10}>*/}
        {/*    <Title title={'施術者のご紹介'} />*/}
        {/*    <AspectRatio*/}
        {/*      mt={6}*/}
        {/*      mx={'auto'}*/}
        {/*      overflow={'hidden'}*/}
        {/*      ratio={16 / 8}*/}
        {/*      rounded={'sm'}*/}
        {/*    >*/}
        {/*      <Image*/}
        {/*        alt={'top_image'}*/}
        {/*        layout={'fill'}*/}
        {/*        src={staticPath.images.PractitionerIntroduction_JPG}*/}
        {/*      />*/}
        {/*    </AspectRatio>*/}
        {/*    <Grid gap={2} mt={2}>*/}
        {/*      <Heading fontSize={'lg'} textAlign={'center'}>*/}
        {/*        院長 繁内俊輝*/}
        {/*      </Heading>*/}
        {/*      <Text fontSize={'sm'} textAlign={'left'}>*/}
        {/*        世の中にはたくさんの治療法があります。一人一人によって合う治療法は異なると思います。*/}
        {/*        鍼をして治すことが最重要ではなく、どのような治療法でも皆さまの症状が改善することが最重要です。*/}
        {/*        まずは問診・全身の状態を把握させていただき、皆さま一人一人の体に合った施術を提供させていただきます。*/}
        {/*      </Text>*/}
        {/*    </Grid>*/}
        {/*  </Box>*/}
      </Box>
    </Box>
  )
}
