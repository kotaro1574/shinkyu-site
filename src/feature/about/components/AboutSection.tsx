import { Box, BoxProps, Heading } from '@chakra-ui/react'
import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'

export const AboutSection = (props: BoxProps) => {
  return (
    <SectionContainer {...props}>
      <Heading
        fontSize={{ base: '2xl', md: '7xl', sm: '4xl' }}
        lineHeight={2}
        textAlign={'center'}
      >
        よりよい生活が送れるように
        <br />
        患者様
        <Box as={'span'} color={'teal.400'}>
          ひとりひとり
        </Box>
        に適した
        <br />
        サービスを提供する
      </Heading>
    </SectionContainer>
  )
}
