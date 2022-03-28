import { Icon, TriangleUpIcon } from '@chakra-ui/icons'
import { Button, Grid, GridProps, Text } from '@chakra-ui/react'
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
      <Button
        bg={'test.900'}
        color={'white'}
        fontSize={'sm'}
        fontWeight={'medium'}
        h={'35px'}
        maxW={'170px'}
        mx={'auto'}
        rightIcon={<Icon as={TriangleUpIcon} transform={'rotate(90deg)'} />}
      >
        詳しくはこちら
      </Button>
      <BeautyAcupunctureCard />
    </Grid>
  )
}
