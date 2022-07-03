import { HamburgerIcon } from '@chakra-ui/icons'
import { AspectRatio, BoxProps, Center, Flex } from '@chakra-ui/react'
import { Drawer } from '@src/components/ui/Drawer'
import { useHeader } from '@src/components/ui/Header/hooks'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'
import { useTopImageHeight } from '@src/lib/recoil/topImageHeight'
import { motion } from 'framer-motion'

export const Header = ({ ...boxProps }: BoxProps) => {
  const { topImageHeight } = useTopImageHeight()
  const {
    headerInnerWidth,
    headerWidth,
    isHeaderActive,
    isOpen,
    onClose,
    onOpen,
  } = useHeader(topImageHeight - 45)
  const MotionFlex = motion<Omit<BoxProps, 'transition'>>(Flex)

  return (
    <Flex h={'45px'} justifyContent={'flex-end'} w={headerWidth} {...boxProps}>
      {isHeaderActive && (
        <MotionFlex bg={'test.900'} pl={4} w={headerInnerWidth}>
          <AspectRatio ratio={147 / 25} w={200}>
            <Image
              alt={'header_image'}
              layout={'fill'}
              src={staticPath.natsumi.headerLogo_svg}
            />
          </AspectRatio>
        </MotionFlex>
      )}
      <Center
        alignItems={'center'}
        bg={'test.900'}
        color={'#fff'}
        h={'45px'}
        minW={'45px'}
        roundedBottomLeft={isHeaderActive ? 'none' : 'sm'}
        onClick={onOpen}
      >
        <HamburgerIcon />
      </Center>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}
