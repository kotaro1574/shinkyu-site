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
                <Th
                  fontSize={{ base: 'xs', md: 'lg' }}
                  px={{ base: 1, md: 4 }}
                  w={{ base: '120px', md: '250px' }}
                >
                  診療時間
                </Th>
                {CONSULTATION_HOURS.weeks.map((week, index) => (
                  <Th
                    fontSize={{ base: 'xs', md: 'lg' }}
                    key={`week_${index}`}
                    px={{ base: 1, md: 4 }}
                    textAlign={'center'}
                  >
                    {week}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td
                  fontSize={{ base: 'xs', md: 'lg' }}
                  fontWeight={'medium'}
                  px={{ base: 1, md: 4 }}
                  w={{ base: '120px', md: '250px' }}
                >
                  09:00 ~ 18:00
                </Td>
                {CONSULTATION_HOURS.mornings.map((morning, index) => (
                  <Th
                    fontWeight={'normal'}
                    key={`morning_${index}`}
                    px={{ base: 1, md: 4 }}
                    textAlign={'center'}
                  >
                    {morning}
                  </Th>
                ))}
              </Tr>
              <Tr>
                <Td
                  fontSize={{ base: 'xs', md: 'lg' }}
                  fontWeight={'medium'}
                  px={{ base: 1, md: 4 }}
                  w={{ base: '120px', md: '250px' }}
                >
                  18:00 ~ 21:00
                </Td>
                {CONSULTATION_HOURS.afternoons.map((afternoon, index) => (
                  <Th
                    fontWeight={'normal'}
                    key={`afternoon_${index}`}
                    px={{ base: 1, md: 4 }}
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
      <Text fontSize={{ base: 'md', md: 'lg' }} textAlign={'center'}>
        ※日曜、祝日はお休みです
      </Text>
    </SectionContainer>
  )
}
