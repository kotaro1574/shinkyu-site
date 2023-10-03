import {
  Box,
  BoxProps,
  Button,
  Flex,
  Grid,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Drawer } from '@src/components/ui/Drawer/Drawer'
import { Logo } from '@src/components/ui/Logo/Logo'
import { HEADER_HEIGHT_PC, HEADER_HEIGHT_SP } from '@src/constant/style'
import { useOverViewHeightContext } from '@src/provider/overViewHeight'
import { useEffect, useState } from 'react'
import { BsFillTelephoneFill, BsLine } from 'react-icons/bs'
import { Link as Scroll } from 'react-scroll'

type Props = BoxProps

export const Header = ({ ...props }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  const { overViewHeight } = useOverViewHeightContext()
  const headerHeight =
    useBreakpointValue({
      base: HEADER_HEIGHT_SP,
      md: HEADER_HEIGHT_PC,
    }) ?? 0

  const visibleHeight = overViewHeight - headerHeight

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > visibleHeight ? setIsVisible(true) : setIsVisible(false)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [visibleHeight])

  return (
    <Box
      as={'header'}
      backdropFilter={'blur(3px)'}
      backgroundColor={'rgba(56, 178, 172, 0.7)'}
      boxShadow={'base'}
      color={'text.primary'}
      display={isVisible ? 'black' : 'none'}
      fontSize={'lg'}
      {...props}
    >
      <Grid
        alignItems={'center'}
        gap={4}
        h={{ base: HEADER_HEIGHT_SP, md: HEADER_HEIGHT_PC }}
        templateColumns={'1fr auto'}
      >
        <Box _hover={{ opacity: '0.7' }} cursor={'pointer'}>
          <Scroll smooth duration={600} to={'top'}>
            <Logo type={'white'} w={'200px'} />
          </Scroll>
        </Box>

        <Flex
          alignItems={'center'}
          cursor={'pointer'}
          display={{ base: 'none', lg: 'flex' }}
          gap={4}
        >
          <Box _hover={{ opacity: '0.7' }}>
            <Scroll smooth duration={600} offset={-60} to={'treatment'}>
              施術について
            </Scroll>
          </Box>
          <Box _hover={{ opacity: '0.7' }}>
            <Scroll smooth duration={600} offset={-60} to={'introduction'}>
              当院について
            </Scroll>
          </Box>
          <Box _hover={{ opacity: '0.7' }}>
            <Scroll smooth duration={600} offset={-60} to={'question'}>
              よくある質問
            </Scroll>
          </Box>
          <Box _hover={{ opacity: '0.7' }}>
            <Scroll smooth duration={600} offset={-60} to={'hours'}>
              診療時間
            </Scroll>
          </Box>
          <Button
            bgColor={'green.line'}
            color={'white'}
            colorScheme={'green'}
            leftIcon={<BsLine />}
          >
            LINEで予約
          </Button>
          <Button
            bgColor={'teal.400'}
            color={'white'}
            colorScheme={'teal'}
            leftIcon={<BsFillTelephoneFill />}
          >
            電話で予約
          </Button>
        </Flex>
        <Drawer
          display={{ base: 'block', lg: 'none' }}
          pr={{ base: 0, lg: '20px' }}
          textAlign={'right'}
        />
      </Grid>
    </Box>
  )
}
