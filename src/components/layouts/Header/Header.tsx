import { Box, Container, Grid } from '@chakra-ui/react'
import { Button } from '@src/components/ui/Button/Button'

export const Header = () => {
  return (
    <Box as={'header'}>
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
          <Button>ラインで予約</Button>
          <Button>電話で予約</Button>
        </Grid>
      </Container>
    </Box>
  )
}
