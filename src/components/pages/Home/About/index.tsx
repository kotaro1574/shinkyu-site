import { Box, BoxProps, Button, Flex, Text } from '@chakra-ui/react'
import { Title } from '@src/components/ui/Heading/Title'
import { HospitalLine } from '@src/components/ui/Icon/HospitalLineIcon'
import { PinOutlineIcon } from '@src/components/ui/Icon/PinOutlineIcon'
import { SignpostIcon } from '@src/components/ui/Icon/SignpostIcon'
import { pagesPath } from '@src/lib/$path'
import { useRouter } from 'next/router'

export const About = (props: BoxProps) => {
  const router = useRouter()
  return (
    <Box {...props}>
      <Title>当院について</Title>
      <Flex alignItems={'center'} mt={4}>
        <SignpostIcon color={'black.500'} mr={2} />
        <Text fontSize={'sm'}>東広島市西条</Text>
      </Flex>
      <Flex alignItems={'center'} mt={1}>
        <PinOutlineIcon color={'black.500'} mr={2} />
        <Text fontSize={'sm'}>鍼灸・整体・産後骨盤矯正・吸い玉</Text>
      </Flex>
      <Flex alignItems={'center'} mt={1}>
        <HospitalLine color={'black.500'} mr={2} />
        <Text fontSize={'sm'}>交通事故治療・各種保険扱い</Text>
      </Flex>
      <Button
        bg={'test.900'}
        display={'block'}
        fontWeight={'medium'}
        mt={3}
        mx={'auto'}
        onClick={() => router.push(pagesPath.about.$url())}
      >
        当院について詳しくはこちら
      </Button>
    </Box>
  )
}
