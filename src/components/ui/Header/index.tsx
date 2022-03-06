import { AspectRatio, Button, Flex, HStack, Spacer } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'

export const Header = () => {
  return (
    <Flex
      alignItems={'center'}
      bg={'transparent'}
      h={'65px'}
      pl={4}
      position={'fixed'}
      w={'full'}
      zIndex={1000}
    >
      <AspectRatio ratio={204 / 35} w={'204px'}>
        <Image
          alt={'スマート法律相談 SMART LEGAL ADVICE'}
          layout={'fill'}
          src={staticPath.images.logo_svg}
        />
      </AspectRatio>
      <Spacer />
      <HStack spacing={6}>
        <HStack>
          <Button fontSize={'sm'} fontWeight={'medium'} h={6} rounded={'sm'}>
            当医院について
          </Button>
          <Button fontSize={'sm'} fontWeight={'medium'} h={6} rounded={'sm'}>
            当院の施術
          </Button>
          <Button fontSize={'sm'} fontWeight={'medium'} h={6} rounded={'sm'}>
            よくある質問
          </Button>
        </HStack>
        <Button
          bg={'#D8C176'}
          fontSize={'xl'}
          fontWeight={'bold'}
          h={'65px'}
          p={3}
          rounded={0}
          roundedBottomLeft={'sm'}
        >
          420-8884-1675
        </Button>
      </HStack>
    </Flex>
  )
}
