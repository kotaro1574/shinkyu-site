import { AspectRatio, Box, BoxProps, Grid, Text } from '@chakra-ui/react'
import { TailorMadeTreatment } from '@src/components/pages/Home/Treatment/TailorMadeTreatment'
import { SubTitle } from '@src/components/ui/Heading/SubTitle'
import { Title } from '@src/components/ui/Heading/Title'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'

export const Treatment = (props: BoxProps) => {
  return (
    <Box mt={10} textAlign={'center'} {...props}>
      <Title>当院の施術</Title>
      <TailorMadeTreatment mt={4} />
      <Box mt={6}>
        <SubTitle>施術内容一覧</SubTitle>
        <Text fontSize={'sm'} mt={4}>
          症状や現在の状態・ご希望を来院時にしっかり問診させていただき、患者様に最適なプランを提案させていただきます。
        </Text>
        <Grid gap={4} mt={4} templateColumns={'repeat(2, 1fr)'}>
          {Array.from({ length: 5 }).map((item, index) => (
            <AspectRatio
              key={index}
              overflow={'hidden'}
              ratio={150 / 120}
              rounded={'sm'}
            >
              <Image
                alt={'top_image'}
                layout={'fill'}
                src={staticPath.images.top1_jpg}
              />
            </AspectRatio>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
