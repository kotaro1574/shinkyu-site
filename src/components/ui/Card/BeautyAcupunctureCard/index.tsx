import { AspectRatio, Flex, Text } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'

export const BeautyAcupunctureCard = () => (
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
      <Image alt={'biyou'} layout={'fill'} src={staticPath.images.biyou_svg} />
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
)
