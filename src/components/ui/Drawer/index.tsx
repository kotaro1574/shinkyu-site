import {
  Box,
  Drawer as BaseDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const Drawer = ({ isOpen, onClose }: Props) => {
  return (
    <BaseDrawer isOpen={isOpen} placement={'left'} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Box>こたろ</Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </BaseDrawer>
  )
}
