import { Box, BoxProps, Center, Grid, GridItem } from '@chakra-ui/react'
import { Title } from '@src/components/ui/Heading/Title'

const CONSULTATION_HOURS = {
  am: ['-', '-', '-', '-', '-', '◯', '-', '-'],
  pm: ['◯', '◯', '◯', '◯', '◯', '-', '-', '-'],
  weeks: ['月', '火', '水', '木', '金', '土', '日', '祝'],
}

export const ConsultationHours = (porps: BoxProps) => {
  return (
    <Box {...porps}>
      <Title>診療時間</Title>
      <Grid
        borderColor={'text.primary'}
        borderLeftWidth={1}
        borderTopWidth={1}
        mt={6}
        templateColumns={'repeat(12, 1fr)'}
      >
        <GridItem
          as={Center}
          bg={'test.900'}
          borderBottomWidth={1}
          borderColor={'text.primary'}
          borderRightWidth={1}
          colSpan={4}
          h={'10'}
          w={'100%'}
        >
          診療時間
        </GridItem>
        {CONSULTATION_HOURS.weeks.map((week, index) => (
          <GridItem
            as={Center}
            bg={'test.900'}
            borderBottomWidth={1}
            borderColor={'text.primary'}
            borderRightWidth={1}
            h={'10'}
            key={index}
            w={'100%'}
          >
            {week}
          </GridItem>
        ))}
        <GridItem
          as={Center}
          borderBottomWidth={1}
          borderColor={'text.primary'}
          borderRightWidth={1}
          colSpan={4}
          h={'10'}
          w={'100%'}
        >
          9:00 ~ 18:00
        </GridItem>
        {CONSULTATION_HOURS.am.map((item, index) => (
          <GridItem
            as={Center}
            borderBottomWidth={1}
            borderColor={'text.primary'}
            borderRightWidth={1}
            h={'10'}
            key={index}
            w={'100%'}
          >
            {item}
          </GridItem>
        ))}
        <GridItem
          as={Center}
          borderBottomWidth={1}
          borderColor={'text.primary'}
          borderRightWidth={1}
          colSpan={4}
          h={'10'}
          w={'100%'}
        >
          18:00 ~
        </GridItem>
        {CONSULTATION_HOURS.pm.map((item, index) => (
          <GridItem
            as={Center}
            borderBottomWidth={1}
            borderColor={'text.primary'}
            borderRightWidth={1}
            h={'10'}
            key={index}
            w={'100%'}
          >
            {item}
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}
