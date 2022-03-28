import { Accordion as BaseAccordion, AccordionProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
} & AccordionProps

export const Accordion = ({ children, ...accordionProps }: Props) => {
  return (
    <BaseAccordion allowToggle {...accordionProps}>
      {children}
    </BaseAccordion>
  )
}
