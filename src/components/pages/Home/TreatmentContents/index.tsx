import { Box, BoxProps, Grid, Text } from '@chakra-ui/react'
import { TreatmentContent } from '@src/components/pages/Home/TreatmentContents/TreatmentContent'
import { TitleWithLink } from '@src/components/ui/Heading/TitleWithLink'
import { pagesPath, staticPath } from '@src/lib/$path'
import { useRouter } from 'next/router'

const TREATMENT_CONTENTS = [
  {
    genre: '鍼灸',
    image:
      staticPath.images.Treatment.TreatmentContents
        .$1AdobeStock_217895936_Preview_jpeg,
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
  const router = useRouter()
  return (
    <Box {...props}>
      <TitleWithLink>施術内容一覧</TitleWithLink>
      <Text fontSize={'sm'} mt={4}>
        症状や現在の状態・ご希望を来院時にしっかり問診させていただき、患者様に最適なプランを提案させていただきます。
      </Text>
      <Grid
        gap={4}
        mt={4}
        templateColumns={'repeat(2, 1fr)'}
        textAlign={'center'}
      >
        {TREATMENT_CONTENTS.map((content, index) => (
          <TreatmentContent
            {...content}
            key={`treatment_content-${index}`}
            onClick={() => router.push(pagesPath.treatments._pid(1).$url())}
          />
        ))}
      </Grid>
    </Box>
  )
}
