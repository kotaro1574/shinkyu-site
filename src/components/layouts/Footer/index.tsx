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
        <Text fontSize={'xs'}>〒739-0035</Text>
        <Text fontSize={'xs'}>
          広島県東広島市西条町郷曽340-8アルソーレ東広島6番館101号室
        </Text>
        <Text fontSize={'xs'} fontWeight={'medium'}>
          駐車場：店前1台あり
        </Text>
      </Grid>
      <Grid gap={1} mt={2} py={3}>
        <Text fontSize={'xs'}>
          診療時間：19:30〜21:00(平日) 9:00〜18:00(土曜日)
        </Text>
        <Text fontSize={'xs'}>定休日：日曜日、第2.4月曜日</Text>
        <Text fontSize={'xs'}>完全予約制(土曜日は遅い時間相談可)</Text>
        <Text fontSize={'xs'} fontWeight={'medium'}>
          盆・年末年始・臨時休診あり
        </Text>
      </Grid>
    </Box>
  )
}
