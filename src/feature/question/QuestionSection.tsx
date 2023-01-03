import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'
import { SectionHeading } from '@src/components/ui/SectionHeading/SectionHeading'
import { QUESTIONS_CONTENTS } from '@src/constants/questions'
import { QuestionAccordion } from '@src/feature/question/QuestionAccordion'

export const QuestionSection = () => {
  return (
    <SectionContainer>
      <SectionHeading>よくある質問</SectionHeading>
      <QuestionAccordion items={QUESTIONS_CONTENTS} mt={8} />
    </SectionContainer>
  )
}
