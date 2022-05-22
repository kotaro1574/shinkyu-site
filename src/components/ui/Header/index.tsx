import { HamburgerIcon } from '@chakra-ui/icons'
import { Center, Flex, FlexProps, useDisclosure } from '@chakra-ui/react'
import { Drawer } from '@src/components/ui/Drawer'

export const Header = ({ ...flexProps }: FlexProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
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
<<<<<<< HEAD
        <AspectRatio
          cursor={'pointer'}
          ratio={200 / 20}
          height={'55px'}
          width={'422px'}
          onClick={() => router.push(pagesPath.$url())}
        >
          <Image
            alt={'ヘッダーロゴ'}
            layout={'fill'}
            src={staticPath.natsumi.logo.logo14_svg}
          />
        </AspectRatio>
        <Box />
=======
        {/*<AspectRatio*/}
        {/*  cursor={'pointer'}*/}
        {/*  ratio={200 / 20}*/}
        {/*  width={'200px'}*/}
        {/*  onClick={() => router.push(pagesPath.$url())}*/}
        {/*>*/}
        {/*  <Image*/}
        {/*    alt={'ヘッダーロゴ'}*/}
        {/*    layout={'fill'}*/}
        {/*    src={staticPath.images.footerLog_svg}*/}
        {/*  />*/}
        {/*</AspectRatio>*/}
        {/*<Box />*/}
>>>>>>> 4bc320aab37c232a09908aff551251e9a942b555
      </Flex>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </>
  )
}
