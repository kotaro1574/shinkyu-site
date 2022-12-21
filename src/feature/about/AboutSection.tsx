import { Container, Heading } from '@chakra-ui/react'

export const AboutSection = () => {
  return (
    <Container as={'section'} py={10}>
      <Heading lineHeight={2} textAlign={'center'}>
        よりよい生活が送れるように
        <br />
        患者様ひとりひとりに適した
        <br />
        サービスを提供する
      </Heading>
    </Container>
  )
}
