import {
  BoxProps,
  Center,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'
import { SectionHeading } from '@src/components/ui/SectionHeading/SectionHeading'
import { CONSULTATION_HOURS } from '@src/feature/consultationHours/constant'

type Props = BoxProps

export const ConsultationHoursSection = ({ ...props }: Props) => {
  return (
    <SectionContainer py={10} {...props}>
      <SectionHeading>診療時間</SectionHeading>
      <Center mt={8}>
        <TableContainer maxW={'500px'}>
          <Table size={'sm'}>
            <Thead>
              <Tr bg={'teal.400'}>
                <Th py={4}>診療時間</Th>
                {CONSULTATION_HOURS.weeks.map((week, index) => (
                  <Th key={`week_${index}`} py={4}>
                    {week}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td py={4}>09:00 ~ 18:00</Td>
                {CONSULTATION_HOURS.mornings.map((morning, index) => (
                  <Th key={`morning_${index}`} py={4}>
                    {morning}
                  </Th>
                ))}
              </Tr>
              <Tr>
                <Td py={4}>18:00 ~ 21:00</Td>
                {CONSULTATION_HOURS.afternoons.map((afternoon, index) => (
                  <Th key={`afternoon_${index}`} py={4}>
                    {afternoon}
                  </Th>
                ))}
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </SectionContainer>
  )
}
