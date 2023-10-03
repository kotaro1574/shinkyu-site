import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  BoxProps,
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
import { Button } from '@src/components/ui/Button/Button'
import { Logo } from '@src/components/ui/Logo/Logo'
import React from 'react'
import { Link as Scroll } from 'react-scroll'

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
        icon={<HamburgerIcon height={8} width={8} />}
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
          <DrawerContent bg={'teal.400'} color={'white'}>
            <DrawerHeader
              borderBottom={'1px solid white'}
              fontWeight={'medium'}
              pb={'20px'}
              position={'relative'}
            >
              <Box _hover={{ opacity: '0.7' }} cursor={'pointer'}>
                <Scroll smooth duration={600} to={'top'} onClick={onClose}>
                  <Logo w={'200px'} type={'white'} />
                </Scroll>
              </Box>
              <DrawerCloseButton
                color={'white'}
                top={'50%'}
                transform={'translateY(-50%)'}
              />
            </DrawerHeader>
            <DrawerBody
              cursor={'pointer'}
              px={'0'}
              py={'0'}
              textAlign={'center'}
            >
              <Box>
                <Box
                  _hover={{ bgColor: 'teal.500' }}
                  borderBottom={'1px solid white'}
                  py={'20px'}
                >
                  <Scroll
                    smooth
                    duration={600}
                    offset={-60}
                    to={'about'}
                    onClick={onClose}
                  >
                    当院について
                  </Scroll>
                </Box>
                <Box
                  _hover={{ bgColor: 'teal.500' }}
                  borderBottom={'1px solid white'}
                  py={'20px'}
                >
                  <Scroll
                    smooth
                    duration={600}
                    offset={-60}
                    to={'treatment'}
                    onClick={onClose}
                  >
                    施術について
                  </Scroll>
                </Box>
                <Box
                  _hover={{ bgColor: 'teal.500' }}
                  borderBottom={'1px solid white'}
                  py={'20px'}
                >
                  <Scroll
                    smooth
                    duration={600}
                    offset={-60}
                    to={'question'}
                    onClick={onClose}
                  >
                    よくある質問
                  </Scroll>
                </Box>
                <Box
                  _hover={{ bgColor: 'teal.500' }}
                  borderBottom={'1px solid white'}
                  py={'20px'}
                >
                  <Scroll smooth duration={600} to={'hours'} onClick={onClose}>
                    診療時間
                  </Scroll>
                </Box>
              </Box>
              <Flex justifyContent={'center'} pt={'20px'} onClick={onClose}>
                <Button
                  _hover={{ bgColor: 'white', color: 'green.line' }}
                  bgColor={'green.line'}
                  mr={'12px'}
                >
                  LINEで予約
                </Button>
                <Button
                  _hover={{ bgColor: 'white', color: 'teal.600' }}
                  bgColor={'teal.600'}
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
