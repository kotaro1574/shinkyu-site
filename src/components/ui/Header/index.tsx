import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, BoxProps, Center, useDisclosure } from '@chakra-ui/react'
import { Drawer } from '@src/components/ui/Drawer'

export const Header = ({ ...boxProps }: BoxProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <Box {...boxProps}>
      <Center
        alignItems={'center'}
        bg={'test.900'}
        color={'#fff'}
        h={'45px'}
        p={0}
        roundedBottomLeft={'sm'}
        w={'45px'}
        onClick={onOpen}
      >
        <HamburgerIcon />
      </Center>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}
