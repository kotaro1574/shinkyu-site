import { HamburgerIcon } from '@chakra-ui/icons'
import {
  AspectRatio,
  BoxProps,
  Center,
  Flex,
  useDisclosure,
} from '@chakra-ui/react'
import { Drawer } from '@src/components/ui/Drawer'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'

export const OtherPageHeader = ({ ...boxProps }: BoxProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <Flex h={'45px'} {...boxProps}>
      <Flex bg={'test.900'} pl={4} w={'100%'}>
        <AspectRatio ratio={147 / 25} w={200}>
          <Image
            alt={'header_image'}
            layout={'fill'}
            src={staticPath.natsumi.headerLogo_svg}
          />
        </AspectRatio>
      </Flex>
      <Center
        alignItems={'center'}
        bg={'test.900'}
        color={'#fff'}
        h={'45px'}
        minW={'45px'}
        onClick={onOpen}
      >
        <HamburgerIcon />
      </Center>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}
