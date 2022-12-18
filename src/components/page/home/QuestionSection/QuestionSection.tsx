import { Container, Heading } from '@chakra-ui/react'
import { QuestionAccordion } from '@src/components/ui/QuestionAccordion/QuestionAccordion'
import { QUESTIONS_CONTENTS } from '@src/constants/questions'

export const QuestionSection = () => {
  return (
    <Container py={10}>
      <Heading textAlign={'center'}>よくある質問</Heading>
      <QuestionAccordion items={QUESTIONS_CONTENTS} mt={8} />
    </Container>
  )
}
