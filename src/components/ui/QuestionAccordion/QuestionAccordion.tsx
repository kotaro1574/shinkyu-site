import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionProps,
  Box,
} from '@chakra-ui/react'
import { QUESTIONS_CONTENTS } from '@src/constants/questions'

type Props = {
  items: typeof QUESTIONS_CONTENTS
} & AccordionProps

// TODO: リファクタする
export const QuestionAccordion = ({ items, ...props }: Props) => {
  return (
    <ChakraAccordion allowToggle {...props}>
      {items.map((item, index) => (
        <AccordionItem key={`accordion_item_${index}`}>
          <AccordionButton
            _expanded={{ bg: 'teal.400', color: 'white' }}
            py={4}
          >
            <Box as={'span'} flex={'1'} textAlign={'left'}>
              {item.question}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel bg={'gray.50'} py={8}>
            ・{item.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </ChakraAccordion>
  )
}
