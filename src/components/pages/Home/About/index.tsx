import { Grid, GridProps, Text } from '@chakra-ui/react'
import { BeautyAcupunctureCard } from '@src/components/ui/Card/BeautyAcupunctureCard'

export const About = (props: GridProps) => {
  return (
    <Grid gap={4} {...props}>
      <Text fontSize={'sm'} textAlign={'center'}>
        東広島市西条
        <br />
        鍼灸・整体・産後骨盤矯正・吸い玉
        <br />
        交通事故治療・各種保険扱い
      </Text>
      <BeautyAcupunctureCard />
    </Grid>
  )
}
