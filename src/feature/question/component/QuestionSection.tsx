import { BoxProps } from '@chakra-ui/react'
import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'
import { SectionHeading } from '@src/components/ui/SectionHeading/SectionHeading'
import { QuestionAccordion } from '@src/feature/question/component/QuestionAccordion'
import { QUESTIONS_CONTENTS } from '@src/feature/question/constant'

type Props = BoxProps

export const QuestionSection = ({ ...props }: Props) => {
  return (
    <SectionContainer pt={'150px'} {...props}>
      <SectionHeading>よくある質問</SectionHeading>
      <QuestionAccordion items={QUESTIONS_CONTENTS} mt={8} />
    </SectionContainer>
  )
}
