import {
  AccordionButton,
  AccordionIcon,
  AccordionItem as BaseAccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'

type Props = {
  answer: string
  question: string
}

export const AccordionItem = ({ answer, question }: Props) => {
  return (
    <BaseAccordionItem>
      <h2>
        <AccordionButton _expanded={{ bg: 'test.900', color: 'white' }}>
          <Box flex={'1'} fontSize={'md'} textAlign={'left'}>
            {question}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel fontSize={'sm'} p={4}>
        {answer}
      </AccordionPanel>
    </BaseAccordionItem>
  )
}
