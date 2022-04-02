import { HamburgerIcon } from '@chakra-ui/icons'
import {
  AspectRatio,
  Center,
  Flex,
  FlexProps,
  useDisclosure,
} from '@chakra-ui/react'
import { Drawer } from '@src/components/ui/Drawer'
import { Image } from '@src/components/ui/Image'
import { pagesPath, staticPath } from '@src/lib/$path'
import { useRouter } from 'next/router'

export const Header = ({ ...flexProps }: FlexProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const router = useRouter()
  return (
    <>
      <Flex
        alignItems={'center'}
        bg={'test.900'}
        h={'50px'}
        justifyContent={'space-between'}
        maxW={'540px'}
        px={4}
        w={'full'}
        {...flexProps}
      >
        <Center color={'text.primay'} p={0} rounded={'sm'} onClick={onOpen}>
          <HamburgerIcon />
        </Center>
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
      </Flex>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </>
  )
}
