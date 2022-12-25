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
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'

type Props = BoxProps

export const Drawer = ({ ...props }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null)

  return (
    <Box {...props}>
      <Button ref={btnRef} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <ChakraDrawer
        finalFocusRef={btnRef}
        isOpen={isOpen}
        placement={'left'}
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody />
          </DrawerContent>
        </DrawerOverlay>
      </ChakraDrawer>
    </Box>
  )
}
