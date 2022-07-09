import { HamburgerIcon } from '@chakra-ui/icons'
import { AspectRatio, BoxProps, Center, Flex } from '@chakra-ui/react'
import { useHomePageHeader } from '@src/components/layouts/Header/HomePageHeader/hooks'
import { Drawer } from '@src/components/ui/Drawer'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'
import { useTopImageHeight } from '@src/lib/recoil/topImageHeight'

export const HomePageHeader = ({ ...boxProps }: BoxProps) => {
  const { topImageHeight } = useTopImageHeight()
  const {
    headerInnerWidth,
    headerWidth,
    isHeaderActive,
    isOpen,
    onClose,
    onOpen,
  } = useHomePageHeader(topImageHeight - 45)

  return (
    <Flex h={'45px'} justifyContent={'flex-end'} w={headerWidth} {...boxProps}>
      {isHeaderActive && (
        <Flex bg={'test.900'} pl={4} w={headerInnerWidth}>
          <AspectRatio ratio={147 / 25} w={200}>
            <Image
              alt={'header_image'}
              layout={'fill'}
              src={staticPath.natsumi.headerLogo_svg}
            />
          </AspectRatio>
        </Flex>
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
