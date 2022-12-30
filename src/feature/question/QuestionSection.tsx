import { Container, Heading } from '@chakra-ui/react'
import { QUESTIONS_CONTENTS } from '@src/constants/questions'
import { QuestionAccordion } from '@src/feature/question/QuestionAccordion'

export const QuestionSection = () => {
  return (
    <Container py={{ base: 5, md: 10 }}>
      <Heading
        fontSize={{ base: '4xl', md: '7xl', sm: '5xl' }}
        textAlign={'center'}
      >
        よくある質問
      </Heading>
      <QuestionAccordion items={QUESTIONS_CONTENTS} mt={8} />
    </Container>
  )
}
