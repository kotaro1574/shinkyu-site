import { Box, Container, Heading } from '@chakra-ui/react'

export const AboutSection = () => {
  return (
    <Container as={'section'} py={{ base: 5, md: 10 }}>
      <Heading
        fontSize={{ base: 'xl', md: '7xl', sm: '4xl' }}
        lineHeight={2}
        textAlign={'center'}
      >
        よりよい生活が送れるように
        <br />
        患者様
        <Box as={'span'} color={'#21B5C1'}>
          ひとりひとり
        </Box>
        に適した
        <br />
        サービスを提供する
      </Heading>
    </Container>
  )
}
