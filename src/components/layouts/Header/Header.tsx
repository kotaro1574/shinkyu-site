import { Box, BoxProps, Container, Grid } from '@chakra-ui/react'
import { Button } from '@src/components/ui/Button/Button'

type Props = BoxProps

export const Header = ({ ...props }: Props) => {
  return (
    <Box as={'header'} py={2} color={'white'} fontSize={'20px'} {...props}>
      <Container>
        <Grid
          alignItems={'center'}
          gap={4}
          templateColumns={'1fr repeat(6, auto)'}
        >
          <Box>繁内鍼灸治療院</Box>
          <Box>当院について</Box>
          <Box>施術について</Box>
          <Box>よくある質問</Box>
          <Box>診療時間</Box>
          <Button bgColor={'#61C359'}>ラインで予約</Button>
          <Button bgColor={'#7BC9CF'}>電話で予約</Button>
        </Grid>
      </Container>
    </Box>
  )
}
