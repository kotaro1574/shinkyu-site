import { HamburgerIcon } from '@chakra-ui/icons'
import {
  AspectRatio,
  Button,
  Center,
  Flex,
  FlexProps,
  useDisclosure,
} from '@chakra-ui/react'
import { Drawer } from '@src/components/ui/Drawer'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'

export const Header = ({ ...flexProps }: FlexProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <>
      <Flex
        alignItems={'center'}
        bg={'test.900'}
        h={'50px'}
        justifyContent={'space-between'}
        maxW={'540px'}
        px={4}
        w={'full'}
        {...flexProps}
      >
        <Center color={'white'} p={0} rounded={'sm'} onClick={onOpen}>
          <HamburgerIcon />
        </Center>
        <AspectRatio ratio={200 / 20} width={'200px'}>
          <Image
            alt={'ヘッダーロゴ'}
            layout={'fill'}
            src={staticPath.images.headerLog_svg}
          />
        </AspectRatio>
        <Button fontSize={'xxs'} h={'35px'} px={2} py={0}>
          予約
        </Button>
      </Flex>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </>
  )
}
