import {
  AspectRatio,
  Box,
  BoxProps,
  Center,
  Flex,
  HStack,
  Text,
} from '@chakra-ui/react'
import { TitleWithLink } from '@src/components/ui/Heading/TitleWithLink'
import { PinOutlineIcon } from '@src/components/ui/Icon/PinOutlineIcon'
import { PlayCircleFillIcon } from '@src/components/ui/Icon/PlayCircleFillIcon'
import { SignpostIcon } from '@src/components/ui/Icon/SignpostIcon'
import { Image } from '@src/components/ui/Image'
import { pagesPath, staticPath } from '@src/lib/$path'

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

      <HStack justifyContent={'center'} mt={5} spacing={5}>
        <AspectRatio height={'100px'} overflow={'hidden'} ratio={1} w={'100px'}>
          <Image
            alt={'top_image'}
            layout={'fill'}
            src={staticPath.images.topAboutSection_svg}
          />
        </AspectRatio>
        <Text color={'test.900'} fontSize={'md'} fontWeight={'medium'}>
          お身体の悩み、
          <br />
          鍼灸に関してのご相談、
          <br />
          ご予約、
          <br />
          お気軽にご相談ください。
        </Text>
      </HStack>
      <Flex alignItems={'center'} mt={5}>
        <SignpostIcon color={'black.500'} mr={2} />
        <Text fontSize={'sm'}>広島県東広島市西条町</Text>
      </Flex>
      <Flex alignItems={'center'} mt={1}>
        <PinOutlineIcon color={'black.500'} mr={2} />
        <Text fontSize={'sm'}>鍼灸・整体・産後骨ケア・吸い玉</Text>
      </Flex>
    </Box>
  )
}
