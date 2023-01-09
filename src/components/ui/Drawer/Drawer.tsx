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
              <Box cursor={'pointer'} _hover={{ opacity: '0.7' }}>
                <Scroll smooth duration={600} to={'top'} onClick={onClose}>
                  繁内鍼灸治療院
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
                    onClick={onClose}
                    to={'about'}
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
                    onClick={onClose}
                    to={'treatment'}
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
                    onClick={onClose}
                    to={'question'}
                  >
                    よくある質問
                  </Scroll>
                </Box>
                <Box
                  _hover={{ bgColor: 'teal.500' }}
                  borderBottom={'1px solid white'}
                  py={'20px'}
                >
                  <Scroll smooth duration={600} onClick={onClose} to={'hours'}>
                    診療時間
                  </Scroll>
                </Box>
              </Box>
              <Flex justifyContent={'center'} pt={'20px'} onClick={onClose}>
                <Button bgColor={'green.line'} color={'white'} mr={'12px'}>
                  LINEで予約
                </Button>
                <Button bgColor={'teal.600'} color={'white'}>
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
