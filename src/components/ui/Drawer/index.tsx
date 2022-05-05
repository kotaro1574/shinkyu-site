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
  const onClickHomePage = () => {
    router.push(pagesPath.$url())
    onClose()
  }
  const onClickAboutPage = () => {
    router.push(pagesPath.about.$url())
    onClose()
  }
  const onClickTreatmentsPage = () => {
    router.push(pagesPath.treatments.$url())
    onClose()
  }

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
              onClick={onClickHomePage}
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
              _hover={{ bg: 'black.100' }}
              borderBottomWidth={1}
              borderColor={'line.dark'}
              color={'text.primary'}
              cursor={'pointer'}
              p={4}
              onClick={onClickAboutPage}
            >
              当医院について
            </Box>
            <Box
              _hover={{ bg: 'black.100' }}
              borderBottomWidth={1}
              borderColor={'line.dark'}
              color={'text.primary'}
              cursor={'pointer'}
              p={4}
              onClick={onClickTreatmentsPage}
            >
              施術内容一覧
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </BaseDrawer>
  )
}
