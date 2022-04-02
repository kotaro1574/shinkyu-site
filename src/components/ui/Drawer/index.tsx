import {
  AspectRatio,
  Box,
  Drawer as BaseDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { pagesPath, staticPath } from '@src/lib/$path'
import { useRouter } from 'next/router'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const Drawer = ({ isOpen, onClose }: Props) => {
  const router = useRouter()
  return (
    <BaseDrawer isOpen={isOpen} placement={'left'} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent roundedRight={'md'}>
          <DrawerCloseButton />
          <DrawerHeader bg={'test.900'} roundedTopRight={'md'}>
            <AspectRatio
              cursor={'pointer'}
              ratio={200 / 20}
              width={'200px'}
              onClick={() => router.push(pagesPath.$url())}
            >
              <Image
                alt={'ヘッダーロゴ'}
                layout={'fill'}
                src={staticPath.images.footerLog_svg}
              />
            </AspectRatio>
          </DrawerHeader>
          <DrawerBody p={0}>
            <Box
              borderBottomWidth={1}
              borderColor={'line.dark'}
              color={'text.primary'}
              p={4}
              onClick={() => router.push(pagesPath.about.$url())}
            >
              当医院について
            </Box>
            <Box
              borderBottomWidth={1}
              borderColor={'line.dark'}
              color={'text.primary'}
              p={4}
            >
              当医院について
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </BaseDrawer>
  )
}
