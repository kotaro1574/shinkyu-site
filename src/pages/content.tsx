import { HamburgerIcon, Icon, TriangleUpIcon } from '@chakra-ui/icons'
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Heading,
  Text,
} from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'

export const HomeContent = () => {
  return (
    <Box>
      <Center
        bg={'#D8C176'}
        h={12}
        position={'fixed'}
        right={0}
        roundedBottomLeft={'sm'}
        top={0}
        w={12}
        zIndex={9999}
      >
        <HamburgerIcon h={6} w={6} />
      </Center>
      <Box position={'relative'}>
        <AspectRatio ratio={625 / 425} w={'full'}>
          <Image
            alt={'top_image'}
            layout={'fill'}
            src={staticPath.images.iikanngiTop_JPG}
          />
        </AspectRatio>
        <AspectRatio
          left={'50%'}
          m={'auto'}
          position={'absolute'}
          ratio={300 / 75}
          top={'50%'}
          transform={'translateY(-50%) translateX(-50%)'}
          w={'300px'}
          zIndex={999}
        >
          <Image
            alt={'top_title'}
            layout={'fill'}
            src={staticPath.images.top_image_title_svg}
          />
        </AspectRatio>
      </Box>
      <Grid gap={10} px={4} py={8}>
        <Grid gap={6}>
          <Text textAlign={'center'}>
            東広島市西条
            <br />
            鍼灸・整体・産後骨盤矯正・吸い玉
            <br />
            交通事故治療・各種保険扱い
          </Text>
          <Flex
            bg={'#FAF7ED'}
            borderColor={'#E7C65B'}
            borderWidth={1}
            mx={'auto'}
            p={3}
            rounded={'sm'}
          >
            <AspectRatio
              flexShrink={0}
              overflow={'hidden'}
              ratio={70 / 70}
              rounded={'sm'}
              w={'70px'}
            >
              <Image
                alt={'biyou'}
                layout={'fill'}
                src={staticPath.images.biyou_svg}
              />
            </AspectRatio>
            <Flex
              cursor={'pointer'}
              flexDirection={'column'}
              fontSize={'sm'}
              gap={'auto'}
              justifyContent={'space-between'}
              ml={4}
            >
              <Text>
                広島市にある美容鍼灸サロンsourire.の
                沖田先生をお招きして、美容鍼灸も行っております。
              </Text>
              <Text as={'span'} color={'#E7C65B'} textAlign={'end'}>
                美容鍼灸についてはこちら
              </Text>
            </Flex>
          </Flex>
        </Grid>
        <Grid gap={8}>
          <Grid gap={2} m={'auto'} placeItems={'center'}>
            <Heading fontSize={'xl'}>当院の特徴</Heading>
            <Divider
              borderBottomWidth={2}
              borderColor={'#E7C65B'}
              w={'110px'}
            />
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
