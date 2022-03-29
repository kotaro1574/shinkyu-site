import { AspectRatio, Box, BoxProps, Grid, Text } from '@chakra-ui/react'
import { SubTitle } from '@src/components/ui/Heading/SubTitle'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'

const TREATMENT_CONTENTS = [
  {
    genre: '針',
    image:
      staticPath.images.Treatment.TreatmentContents
        .$1AdobeStock_217895936_Preview_jpeg,
  },
  {
    genre: '灸',
    image:
      staticPath.images.Treatment.TreatmentContents
        .$2AdobeStock_90536261_Preview_jpeg,
  },
  {
    genre: '整体',
    image:
      staticPath.images.Treatment.TreatmentContents
        .$3AdobeStock_252774376_Preview_jpeg,
  },

  {
    genre: '産後骨盤矯正',
    image:
      staticPath.images.Treatment.TreatmentContents
        .$4AdobeStock_410038415_Preview_jpeg,
  },
  {
    genre: '吸い玉',
    image:
      staticPath.images.Treatment.TreatmentContents
        .$5AdobeStock_2653232_Preview_jpeg,
  },
]

export const TreatmentContents = (props: BoxProps) => {
  return (
    <Box {...props}>
      <SubTitle>施術内容一覧</SubTitle>
      <Text fontSize={'sm'} mt={4}>
        症状や現在の状態・ご希望を来院時にしっかり問診させていただき、患者様に最適なプランを提案させていただきます。
      </Text>
      <Grid gap={4} mt={4} templateColumns={'repeat(2, 1fr)'}>
        {TREATMENT_CONTENTS.map((content, index) => (
          <Box
            _hover={{ opacity: '50%' }}
            bg={'black'}
            key={`treatment_content-${index}`}
            position={'relative'}
          >
            <AspectRatio
              opacity={'70%'}
              overflow={'hidden'}
              ratio={150 / 120}
              rounded={'sm'}
            >
              <Image alt={'top_image'} layout={'fill'} src={content.image} />
            </AspectRatio>
            <Text
              bottom={0}
              color={'white'}
              fontSize={'sm'}
              fontWeight={'medium'}
              position={'absolute'}
              w={'full'}
            >
              {content.genre}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  )
}
