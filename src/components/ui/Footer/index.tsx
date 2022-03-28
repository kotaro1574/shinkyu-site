import { AspectRatio, Box, BoxProps, Grid, Text } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'

export const Footer = (props: BoxProps) => {
  return (
    <Box bg={'black.100'} mt={10} px={4} py={8} {...props}>
      <AspectRatio mx={'auto'} ratio={200 / 20} width={'200px'}>
        <Image
          alt={'フッターロゴ'}
          layout={'fill'}
          src={staticPath.images.footerLog_svg}
        />
      </AspectRatio>
      <Grid borderBottomWidth={1} borderTopWidth={1} gap={1} mt={4} py={3}>
        <Text fontSize={'xs'}>〒619-0215</Text>
        <Text fontSize={'xs'}>京都府木津川市梅美台2丁目5-5</Text>
        <Text fontSize={'xs'} fontWeight={'medium'}>
          店前一台
        </Text>
      </Grid>
      <Grid gap={1} mt={2} py={3}>
        <Text fontSize={'xs'}>
          診療時間：9:30〜12:30、15:00〜19:30（最終受付18:30）
        </Text>
        <Text fontSize={'xs'}>定休日：日曜日、第2.4月曜日</Text>
        <Text fontSize={'xs'} fontWeight={'medium'}>
          盆・年末年始・臨時休診あり
        </Text>
      </Grid>
    </Box>
  )
}
