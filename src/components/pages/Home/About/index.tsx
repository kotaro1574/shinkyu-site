import { Grid, GridProps, Text } from '@chakra-ui/react'
import { Title } from '@src/components/ui/Heading/Title'

export const About = (props: GridProps) => {
  return (
    <>
      <Title>当院について</Title>
      <Text fontSize={'sm'} mt={5} textAlign={'center'}>
        東広島市西条
        <br />
        鍼灸・整体・産後骨盤矯正・吸い玉
        <br />
        交通事故治療・各種保険扱い
      </Text>
      <Grid gap={4} {...props} />
    </>
  )
}
