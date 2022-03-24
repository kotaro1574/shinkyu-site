import { Icon, TriangleUpIcon } from '@chakra-ui/icons'
import { AspectRatio, Box, Button, Grid, Heading, Text } from '@chakra-ui/react'
import { TopImage } from '@src/components/pages/Home/TopImage'
import { BeautyAcupunctureCard } from '@src/components/ui/Card/BeautyAcupunctureCard'
import { Image } from '@src/components/ui/Image'
import { Title } from '@src/components/ui/Title'
import { staticPath } from '@src/lib/$path'

export const HomeContent = () => {
  return (
    <Box>
      <TopImage />
      <Grid gap={10} px={4} py={8}>
        <Grid gap={6}>
          <Text textAlign={'center'}>
            東広島市西条
            <br />
            鍼灸・整体・産後骨盤矯正・吸い玉
            <br />
            交通事故治療・各種保険扱い
          </Text>
          <BeautyAcupunctureCard />
        </Grid>
        <Grid gap={8}>
          <Grid gap={4} placeItems={'center'}>
            <Title title={'当院の特徴'} />
            <Heading color={'#DBB025'} fontSize={'xl'}>
              一人一人に合った施術
            </Heading>
            <AspectRatio
              overflow={'hidden'}
              ratio={625 / 425}
              rounded={'sm'}
              w={'full'}
            >
              <Image
                alt={'top_image'}
                layout={'fill'}
                src={staticPath.images.section1_1_png}
              />
            </AspectRatio>
            <Text>
              治療を行う前に、問診、全身の状態を確認していき患者様ひとりひとりの身体にあった施術を提供させていただきます。
            </Text>
            <Button
              bg={'#DBB025'}
              color={'white'}
              fontSize={'md'}
              fontWeight={'medium'}
              rightIcon={
                <Icon as={TriangleUpIcon} transform={'rotate(90deg)'} />
              }
            >
              詳しくはこちら
            </Button>
          </Grid>
          <Grid gap={4} placeItems={'center'}>
            <Heading color={'#DBB025'} fontSize={'xl'}>
              一人一人に合った施術
            </Heading>
            <AspectRatio
              overflow={'hidden'}
              ratio={625 / 425}
              rounded={'sm'}
              w={'full'}
            >
              <Image
                alt={'top_image'}
                layout={'fill'}
                src={staticPath.images.section1_1_png}
              />
            </AspectRatio>
            <Text>
              治療を行う前に、問診、全身の状態を確認していき患者様ひとりひとりの身体にあった施術を提供させていただきます。
            </Text>
            <Button
              bg={'#DBB025'}
              color={'white'}
              fontSize={'md'}
              fontWeight={'medium'}
              rightIcon={
                <Icon as={TriangleUpIcon} transform={'rotate(90deg)'} />
              }
            >
              詳しくはこちら
            </Button>
          </Grid>
          <Grid gap={4} placeItems={'center'}>
            <Heading color={'#DBB025'} fontSize={'xl'}>
              一人一人に合った施術
            </Heading>
            <AspectRatio
              overflow={'hidden'}
              ratio={625 / 425}
              rounded={'sm'}
              w={'full'}
            >
              <Image
                alt={'top_image'}
                layout={'fill'}
                src={staticPath.images.section1_1_png}
              />
            </AspectRatio>
            <Text>
              治療を行う前に、問診、全身の状態を確認していき患者様ひとりひとりの身体にあった施術を提供させていただきます。
            </Text>
            <Button
              bg={'#DBB025'}
              color={'white'}
              fontSize={'md'}
              fontWeight={'medium'}
              rightIcon={
                <Icon as={TriangleUpIcon} transform={'rotate(90deg)'} />
              }
            >
              詳しくはこちら
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
