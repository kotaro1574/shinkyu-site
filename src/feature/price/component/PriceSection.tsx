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
    <SectionContainer pt={{ base: '64px', md: '100px' }} {...props}>
      <SectionHeading>料金表</SectionHeading>
      <Card p={{ base: '0', md: '16px' }}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing={'4'}>
            <Box>
              <Heading
                fontSize={{ base: '15px', md: '18px' }}
                textTransform={'uppercase'}
              >
                骨格&神経&筋膜整体（全身）
              </Heading>
              <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                  <Text fontSize={{ base: '14px', md: '16px' }} pt={'2'}>
                    鍼灸・整体併用
                  </Text>
                  <Text fontSize={{ base: '14px', md: '16px' }} pt={'2'}>
                    整体のみ
                  </Text>
                </Box>
                <Text fontSize={{ base: '14px', md: '16px' }}>
                  90分 12,000円
                </Text>
              </Flex>
            </Box>
            <Box>
              <Heading
                fontSize={{ base: '15px', md: '18px' }}
                textTransform={'uppercase'}
              >
                複数の症状改善・再発予防特化施術（2〜3部位）
              </Heading>
              <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                  <Text fontSize={{ base: '14px', md: '16px' }} pt={'2'}>
                    鍼灸・整体併用
                  </Text>
                  <Text fontSize={{ base: '14px', md: '16px' }} pt={'2'}>
                    整体のみ
                  </Text>
                </Box>
                <Text fontSize={{ base: '14px', md: '16px' }}>
                  60分 6,500円
                </Text>
              </Flex>
            </Box>
            <Box>
              <Heading
                fontSize={{ base: '15px', md: '18px' }}
                textTransform={'uppercase'}
              >
                痛み・痺れ特化施術（1部位）
              </Heading>
              <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                  <Text fontSize={{ base: '14px', md: '16px' }} pt={'2'}>
                    鍼灸・整体併用
                  </Text>
                  <Text fontSize={{ base: '14px', md: '16px' }} pt={'2'}>
                    整体のみ
                  </Text>
                </Box>
                <Text fontSize={{ base: '14px', md: '16px' }}>
                  40分 5,000円
                </Text>
              </Flex>
            </Box>
            <Box>
              <Heading
                fontSize={{ base: '15px', md: '18px' }}
                textTransform={'uppercase'}
              >
                オプション（予約時にお伝えください）
              </Heading>
              <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text fontSize={{ base: '14px', md: '16px' }} pt={'2'}>
                  吸い玉（カッピング）
                </Text>
                <Text fontSize={{ base: '14px', md: '16px' }} pt={'2'}>
                  15分 1,500円
                </Text>
              </Flex>
              <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text fontSize={{ base: '14px', md: '16px' }} pt={'2'}>
                  オイルスライドカッピング
                </Text>
                <Text fontSize={{ base: '14px', md: '16px' }} pt={'2'}>
                  15分 2,000円
                </Text>
              </Flex>
              <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text fontSize={{ base: '14px', md: '16px' }} pt={'2'}>
                  上記カッピング両方
                </Text>
                <Text fontSize={{ base: '14px', md: '16px' }} pt={'2'}>
                  20分 3,000円
                </Text>
              </Flex>
            </Box>
            <Box>
              <Heading
                fontSize={{ base: '15px', md: '18px' }}
                textTransform={'uppercase'}
              >
                初診料・再診料
              </Heading>
              <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text fontSize={{ base: '14px', md: '16px' }} pt={'2'}>
                  初診の方・半年以上期間が空いた方
                </Text>
                <Text fontSize={{ base: '14px', md: '16px' }} pt={'2'}>
                  1,000円
                </Text>
              </Flex>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            ※施術時間は問診、お着替え、施術、お会計の時間も含まれます。
          </Text>
        </CardFooter>
      </Card>
    </SectionContainer>
  )
}
