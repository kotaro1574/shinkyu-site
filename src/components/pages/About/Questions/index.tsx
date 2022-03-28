import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  BoxProps,
} from '@chakra-ui/react'
import { Title } from '@src/components/ui/Heading/Title'

export const Questions = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Title>よくある質問</Title>
      <Accordion allowToggle mt={6}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex={'1'} textAlign={'left'}>
                予約は必要ですか？
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}
