import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  BoxProps,
  Button,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'

type Props = BoxProps

export const Drawer = ({ ...props }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null)

  return (
    <Box {...props}>
      <IconButton
        aria-label={'Search database'}
        bgColor={'transparent'}
        icon={<HamburgerIcon height={8} width={8} />}
        ref={btnRef}
        onClick={onOpen}
      />
      <ChakraDrawer
        finalFocusRef={btnRef}
        isOpen={isOpen}
        placement={'right'}
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader bg={'#7BC9CF'} color={'white'}>
              繁内鍼灸治療院
            </DrawerHeader>
            <DrawerBody p={'20px 16px'}>
              <Box py={'10px'}>当院について</Box>
              <Box py={'10px'}>施術について</Box>
              <Box py={'10px'}>よくある質問</Box>
              <Box paddingTop={'10px'} paddingBottom={'20px'}>
                診療時間
              </Box>
              <Button bgColor={'#61C359'} color={'white'} marginRight={'8px'}>
                ラインで予約
              </Button>
              <Button bgColor={'#7BC9CF'} color={'white'}>
                電話で予約
              </Button>
              <Test text="natumi" color={'red'} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </ChakraDrawer>
    </Box>
  )
}

type TestProps = {
  text: string
  age?: number
} & BoxProps

const Test = ({ text, age, ...props }: TestProps) => {
  return (
    <Flex {...props}>
      <Box>{text}</Box>
      <Box>{age}</Box>
    </Flex>
  )
}
