import { BoxProps, Card, Text } from '@chakra-ui/react'
import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'
import { SectionHeading } from '@src/components/ui/SectionHeading/SectionHeading'

export const PriceSection = (props: BoxProps) => {
  return (
    <SectionContainer pt={{ base: '64px', md: '100px' }} {...props}>
      <SectionHeading>料金表</SectionHeading>
      <Card mt={'32px'} p={'16px'}>
        <Text fontSize={'24px'} fontWeight={'bold'} mb={'16px'}>
          料金表
        </Text>
        <Text fontSize={'16px'} mb={'16px'}>
          ここに料金表を記載する
        </Text>
      </Card>
    </SectionContainer>
  )
}
