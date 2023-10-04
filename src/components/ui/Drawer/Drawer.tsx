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
  Flex,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import { Logo } from '@src/components/ui/Logo/Logo'
import React from 'react'
import { BsFillTelephoneFill, BsLine } from 'react-icons/bs'
import { Link as Scroll } from 'react-scroll'
import { LineButton } from '../Button/LineButton'

type Props = BoxProps

export const Drawer = ({ ...props }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null)

  return (
    <Box {...props}>
      <IconButton
        aria-label={'Search database'}
        bgColor={'transparent'}
        cursor={'pointer'}
        icon={<HamburgerIcon color={'white'} height={8} width={8} />}
        ref={btnRef}
        onClick={onOpen}
      />
      <ChakraDrawer
        finalFocusRef={btnRef}
        isOpen={isOpen}
        placement={'right'}
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent
            backdropFilter={'blur(3px)'}
            backgroundColor={'rgba(56, 178, 172, 0.7)'}
            color={'white'}
          >
            <DrawerHeader
              // borderBottom={'1px solid white'}
              fontWeight={'medium'}
              pb={'20px'}
              position={'relative'}
            >
              <Box _hover={{ opacity: '0.7' }} cursor={'pointer'}>
                <Scroll smooth duration={600} to={'top'} onClick={onClose}>
                  <Logo type={'white'} w={'200px'} />
                </Scroll>
              </Box>
              <DrawerCloseButton
                color={'white'}
                top={'50%'}
                transform={'translateY(-50%)'}
              />
            </DrawerHeader>
            <DrawerBody cursor={'pointer'} px={'0'} py={'0'}>
              <Box>
                <Box _hover={{ opacity: '0.7' }} p={'24px'}>
                  <Scroll
                    smooth
                    duration={600}
                    offset={-60}
                    to={'about'}
                    onClick={onClose}
                  >
                    ・当院について
                  </Scroll>
                </Box>
                <Box _hover={{ opacity: '0.7' }} p={'24px'}>
                  <Scroll
                    smooth
                    duration={600}
                    offset={-60}
                    to={'treatment'}
                    onClick={onClose}
                  >
                    ・施術について
                  </Scroll>
                </Box>
                <Box _hover={{ opacity: '0.7' }} p={'24px'}>
                  <Scroll
                    smooth
                    duration={600}
                    offset={-60}
                    to={'question'}
                    onClick={onClose}
                  >
                    ・よくある質問
                  </Scroll>
                </Box>
                <Box _hover={{ opacity: '0.7' }} p={'24px'}>
                  <Scroll smooth duration={600} to={'hours'} onClick={onClose}>
                    ・診療時間
                  </Scroll>
                </Box>
              </Box>
              <Flex
                gap={4}
                justifyContent={'center'}
                mt={'24px'}
                onClick={onClose}
              >
                <LineButton />
                <Button
                  bgColor={'teal.400'}
                  borderColor={'white'}
                  borderWidth={'1px'}
                  color={'white'}
                  colorScheme={'teal'}
                  leftIcon={<BsFillTelephoneFill />}
                >
                  電話で予約
                </Button>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </ChakraDrawer>
    </Box>
  )
}
