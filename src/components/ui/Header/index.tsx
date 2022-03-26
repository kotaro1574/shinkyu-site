import { HamburgerIcon } from '@chakra-ui/icons'
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FlexProps,
  useDisclosure,
} from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'
import { useRef } from 'react'

export const Header = ({ ...flexProps }: FlexProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)
  return (
    <>
      <Flex
        alignItems={'center'}
        bg={'#DBB025'}
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
      <Drawer
        finalFocusRef={btnRef}
        isOpen={isOpen}
        placement={'left'}
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Box>こたろ</Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
