import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Center,
  Flex,
  FlexProps,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react'
import { Drawer } from '@src/components/ui/Drawer'

export const Header = ({ ...flexProps }: FlexProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Flex
        alignItems={'center'}
        bg={'test.900'}
        h={'50px'}
        maxW={'540px'}
        px={4}
        w={'full'}
        {...flexProps}
      >
        {/*<AspectRatio*/}
        {/*  cursor={'pointer'}*/}
        {/*  ratio={200 / 40}*/}
        {/*  width={'200px'}*/}
        {/*  onClick={() => router.push(pagesPath.$url())}*/}
        {/*>*/}
        {/*  <Image*/}
        {/*    alt={'ヘッダーロゴ'}*/}
        {/*    layout={'fill'}*/}
        {/*    src={staticPath.natsumi.logo1_svg}*/}
        {/*  />*/}
        {/*</AspectRatio>*/}
        <Spacer />
        <Center color={'#fff'} p={0} rounded={'sm'} onClick={onOpen}>
          <HamburgerIcon />
        </Center>
      </Flex>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </>
  )
}
