import { BoxProps } from '@chakra-ui/react'
import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'
import { SectionHeading } from '@src/components/ui/SectionHeading/SectionHeading'

export const PriceSection = (props: BoxProps) => {
  return (
    <SectionContainer pt={{ base: '64px', md: '100px' }} {...props}>
      <SectionHeading>料金表</SectionHeading>
    </SectionContainer>
  )
}
