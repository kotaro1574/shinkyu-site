import {
  Box,
  BoxProps,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react'
import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'
import { SectionHeading } from '@src/components/ui/SectionHeading/SectionHeading'

export const PriceSection = (props: BoxProps) => {
  return (
    <SectionContainer pt={'64px'} {...props}>
      <SectionHeading>料金表</SectionHeading>
      <Card p={{ base: '0', md: '16px' }}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing={'4'}>
            <Box>
              <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Heading
                  fontSize={{ base: '15px', md: '18px' }}
                  textTransform={'uppercase'}
                >
                  鍼灸、骨格矯正、整体
                </Heading>
                <Text
                  fontSize={{ base: '14px', md: '16px' }}
                  fontWeight={'medium'}
                >
                  8,800円
                </Text>
              </Flex>
            </Box>
            {/* <Box>
              <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Heading
                  fontSize={{ base: '15px', md: '18px' }}
                  textTransform={'uppercase'}
                >
                  鍼灸、骨格矯正
                </Heading>
                <Text
                  fontSize={{ base: '14px', md: '16px' }}
                  fontWeight={'medium'}
                >
                  5,500円
                </Text>
              </Flex>
            </Box> */}
            <Box>
              <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Heading
                  fontSize={{ base: '15px', md: '18px' }}
                  textTransform={'uppercase'}
                >
                  学生
                </Heading>
                <Text
                  fontSize={{ base: '14px', md: '16px' }}
                  fontWeight={'medium'}
                >
                  5,000円
                </Text>
              </Flex>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter flexDirection={'column'}>
          {/* <Text fontSize={{ base: 'xs', md: 'sm' }}>
            ※施術時間は問診、お着替え、施術、お会計の時間も含まれます。
          </Text> */}
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            ※無断でキャンセルされた場合は、治療費の100%を頂戴いたします。
          </Text>
        </CardFooter>
      </Card>
    </SectionContainer>
  )
}
