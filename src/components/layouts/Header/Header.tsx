import { Box, BoxProps, Container, Flex, Grid } from '@chakra-ui/react'
import { Button } from '@src/components/ui/Button/Button'
import { Drawer } from '@src/components/ui/Drawer/Drawer'

type Props = BoxProps

export const Header = ({ ...props }: Props) => {
  return (
    <Box as={'header'} color={'white'} fontSize={'lg'} py={2} {...props}>
      <Container>
        <Grid alignItems={'center'} gap={4} templateColumns={'1fr auto'}>
          <Box fontSize={{ base: '4xl', lg: '3xl' }}>繁内鍼灸治療院</Box>
          <Flex
            alignItems={'center'}
            display={{ base: 'none', lg: 'flex' }}
            gap={4}
          >
            <Box>当院について</Box>
            <Box>施術について</Box>
            <Box>よくある質問</Box>
            <Box>診療時間</Box>
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
