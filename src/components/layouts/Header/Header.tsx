import { Box, BoxProps, Flex, Grid, useBreakpointValue } from '@chakra-ui/react'
import { Button } from '@src/components/ui/Button/Button'
import { Drawer } from '@src/components/ui/Drawer/Drawer'
import { HEADER_HEIGHT_PC, HEADER_HEIGHT_SP } from '@src/constant/style'
import { useOverViewHeightContext } from '@src/provider/overViewHeight'
import { useEffect, useState } from 'react'
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
      bgColor={isVisible ? 'white' : 'rgba(56, 178, 172, 0.3)'}
      boxShadow={'base'}
      color={isVisible ? 'text.primary' : 'white'}
      fontSize={'lg'}
      maxW={'960px'}
      {...props}
    >
      <Grid
        alignItems={'center'}
        gap={4}
        h={{ base: HEADER_HEIGHT_SP, md: HEADER_HEIGHT_PC }}
        templateColumns={'1fr auto'}
      >
        <Box
          _hover={{ opacity: '0.7' }}
          cursor={'pointer'}
          fontSize={{ base: '4xl', lg: '3xl' }}
        >
          <Scroll smooth duration={600} to={'top'}>
            繁内鍼灸治療院
          </Scroll>
        </Box>

        <Flex
          alignItems={'center'}
          cursor={'pointer'}
          display={{ base: 'none', lg: 'flex' }}
          gap={4}
        >
          <Box _hover={{ opacity: '0.7' }}>
            <Scroll smooth duration={600} offset={-60} to={'about'}>
              当院について
            </Scroll>
          </Box>
          <Box _hover={{ opacity: '0.7' }}>
            <Scroll smooth duration={600} offset={-60} to={'treatment'}>
              施術について
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
            _hover={{ bgColor: 'white', color: 'green.line' }}
            bgColor={'green.line'}
          >
            LINEで予約
          </Button>
          <Button
            _hover={{ bgColor: 'white', color: 'teal.400' }}
            bgColor={'teal.400'}
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
