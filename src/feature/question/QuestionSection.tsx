import { Container } from '@chakra-ui/react'
import { SectionHeading } from '@src/components/ui/SectionHeading/SectionHeading'
import { QUESTIONS_CONTENTS } from '@src/constants/questions'
import { QuestionAccordion } from '@src/feature/question/QuestionAccordion'

export const QuestionSection = () => {
  return (
    <Container py={{ base: 5, md: 10 }}>
      <SectionHeading>よくある質問</SectionHeading>
      <QuestionAccordion items={QUESTIONS_CONTENTS} mt={8} />
    </Container>
  )
}
