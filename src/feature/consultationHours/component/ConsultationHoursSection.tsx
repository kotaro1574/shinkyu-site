import {
  Box,
  BoxProps,
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
      <Box>
        <TableContainer mb={8}>
          <Table>
            <Thead>
              <Tr bg={'gray.100'}>
                <Th fontSize={{ base: 'sm', md: 'lg' }}>診療時間</Th>
                {CONSULTATION_HOURS.weeks.map((week, index) => (
                  <Th
                    fontSize={{ base: 'sm', md: 'lg' }}
                    key={`week_${index}`}
                    textAlign={'center'}
                  >
                    {week}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td fontSize={{ base: 'sm', md: 'lg' }} fontWeight={'medium'}>
                  09:00 ~ 18:00
                </Td>
                {CONSULTATION_HOURS.mornings.map((morning, index) => (
                  <Th
                    fontWeight={'normal'}
                    key={`morning_${index}`}
                    textAlign={'center'}
                  >
                    {morning}
                  </Th>
                ))}
              </Tr>
              <Tr>
                <Td fontSize={{ base: 'sm', md: 'lg' }} fontWeight={'medium'}>
                  18:00 ~ 21:00
                </Td>
                {CONSULTATION_HOURS.afternoons.map((afternoon, index) => (
                  <Th
                    fontWeight={'normal'}
                    key={`afternoon_${index}`}
                    textAlign={'center'}
                  >
                    {afternoon}
                  </Th>
                ))}
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Text textAlign={'center'}>※日曜、祝日はお休みです</Text>
    </SectionContainer>
  )
}
