import { Box, BoxProps, Center, Flex, Text } from '@chakra-ui/react'
import { TitleWithLink } from '@src/components/ui/Heading/TitleWithLink'
import { HospitalLine } from '@src/components/ui/Icon/HospitalLineIcon'
import { PinOutlineIcon } from '@src/components/ui/Icon/PinOutlineIcon'
import { PlayCircleFillIcon } from '@src/components/ui/Icon/PlayCircleFillIcon'
import { SignpostIcon } from '@src/components/ui/Icon/SignpostIcon'
import { pagesPath } from '@src/lib/$path'

export const About = (props: BoxProps) => {
  return (
    <Box {...props}>
      <TitleWithLink href={pagesPath.about.$url()}>当院について</TitleWithLink>
      <Center
        bg={'black.50'}
        justifyContent={'space-between'}
        mt={4}
        px={4}
        py={3}
        rounded={'md'}
      >
        <Box>
          <Box color={'test.900'} fontSize={'xxs'}>
            2022.02.14
          </Box>
          <Box fontSize={'sm'}>緊急メンテナンスのお知らせ</Box>
        </Box>
        <PlayCircleFillIcon color={'test.900'} />
      </Center>
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
    </Box>
  )
}
