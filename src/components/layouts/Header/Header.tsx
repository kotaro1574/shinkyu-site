import {
  Box,
  BoxProps,
  Container,
  Flex,
  Grid,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react'
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
      bgColor={isVisible ? 'white' : 'transparent'}
      color={isVisible ? 'text.primary' : 'white'}
      fontSize={'lg'}
      {...props}
    >
      <Container>
        <Grid
          alignItems={'center'}
          gap={4}
          h={{ base: HEADER_HEIGHT_SP, md: HEADER_HEIGHT_PC }}
          templateColumns={'1fr auto'}
        >
          <Link fontSize={{ base: '4xl', lg: '3xl' }} href={'#top'}>
            繁内鍼灸治療院
          </Link>
          <Flex
            alignItems={'center'}
            display={{ base: 'none', lg: 'flex' }}
            gap={4}
          >
            <Scroll smooth to={'about'} duration={600} offset={-60}>
              当院について
            </Scroll>
            <Scroll smooth to={'treatment'} duration={600} offset={-60}>
              施術について
            </Scroll>
            <Scroll smooth to={'question'} duration={600} offset={-60}>
              よくある質問
            </Scroll>
            <Scroll smooth to={'hours'} duration={600}>
              診療時間
            </Scroll>
            <Button bgColor={'green.line'}>LINEで予約</Button>
            <Button bgColor={'teal.400'}>電話で予約</Button>
          </Flex>
          <Drawer
            display={{ base: 'block', lg: 'none' }}
            pr={{ base: 0, lg: '20px' }}
            textAlign={'right'}
          />
        </Grid>
      </Container>
    </Box>
  )
}
