import {
  BoxProps,
  Center,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
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
    <SectionContainer {...props}>
      <SectionHeading>診療時間</SectionHeading>
      <Center mt={8}>
        <TableContainer>
          <Table size={'sm'}>
            <Thead>
              <Tr bg={'teal.400'}>
                <Th color={'white'} p={{ base: 2.5, sm: 4 }}>
                  診療時間
                </Th>
                {CONSULTATION_HOURS.weeks.map((week, index) => (
                  <Th
                    color={'white'}
                    key={`week_${index}`}
                    p={{ base: 2.5, sm: 4 }}
                  >
                    {week}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td p={{ base: 2.5, sm: 4 }}>09:00 ~ 18:00</Td>
                {CONSULTATION_HOURS.mornings.map((morning, index) => (
                  <Th key={`morning_${index}`} p={{ base: 2.5, sm: 4 }}>
                    {morning}
                  </Th>
                ))}
              </Tr>
              <Tr>
                <Td p={{ base: 2.5, sm: 4 }}>18:00 ~ 21:00</Td>
                {CONSULTATION_HOURS.afternoons.map((afternoon, index) => (
                  <Th key={`afternoon_${index}`} p={{ base: 2.5, sm: 4 }}>
                    {afternoon}
                  </Th>
                ))}
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <Text mt={8} textAlign={'center'}>
        ※日曜、祝日はお休みです
      </Text>
    </SectionContainer>
  )
}
