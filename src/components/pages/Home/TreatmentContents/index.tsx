import { Box, BoxProps, Grid, Text } from '@chakra-ui/react'
import { TreatmentContent } from '@src/components/pages/Home/TreatmentContents/TreatmentContent'
import { TitleWithLink } from '@src/components/ui/Heading/TitleWithLink'
import { pagesPath, staticPath } from '@src/lib/$path'
import { useRouter } from 'next/router'

const TREATMENT_CONTENTS = [
  {
    genre: '鍼灸',
    id: 'acupuncture_and_moxibustion',
    image: staticPath.natsumi.top_treatment.acupuncture_and_moxibustion_jpg,
  },

  {
    genre: '整体',
    id: 'manipulative_treatment',
    image: staticPath.natsumi.top_treatment.chiropractics_jpg,
  },

  {
    genre: '産後骨盤矯正',
    id: 'postpartum_pelvic_correction',
    image: staticPath.natsumi.top_treatment.pelvic_correction_jpg,
  },
  {
    genre: '吸い玉',
    id: 'cupping_ball',
    image:
      staticPath.images.Treatment.TreatmentContents
        .$5AdobeStock_2653232_Preview_jpeg,
  },
]

export const TreatmentContents = (props: BoxProps) => {
  const router = useRouter()
  return (
    <Box {...props}>
      <TitleWithLink href={pagesPath.treatments.$url()}>
        施術内容一覧
      </TitleWithLink>
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
            onClick={() =>
              router.push(pagesPath.treatments._pid(content.id).$url())
            }
          />
        ))}
      </Grid>
    </Box>
  )
}
