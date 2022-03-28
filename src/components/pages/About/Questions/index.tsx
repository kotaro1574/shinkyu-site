import { Box, BoxProps } from '@chakra-ui/react'
import { Accordion } from '@src/components/ui/Accordion'
import { AccordionItem } from '@src/components/ui/Accordion/AccordionItem'
import { Title } from '@src/components/ui/Heading/Title'

const QUESTIONS = [
  {
    answer: '当院は完全予約制です',
    question: '予約は必要ですか？',
  },
  {
    answer: 'だいだい60分くらいです',
    question: '治療時間はどのくらい？',
  },
  {
    answer: 'いたくねーよ',
    question: '鍼治療って痛いですか？',
  },
  {
    answer: 'どんな服装でもバチコイや！！',
    question: 'どんな服装で行けばいいですか？',
  },
  {
    answer: 'PayPay使えます',
    question: '支払い方法は何がありますか？',
  },
  {
    answer: '一台あります',
    question: '駐車場はありますか？',
  },
]

export const Questions = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Title>よくある質問</Title>
      <Accordion allowToggle mt={6}>
        {QUESTIONS.map((question, index) => (
          <AccordionItem {...question} key={index} />
        ))}
      </Accordion>
    </Box>
  )
}
