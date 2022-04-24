import { AspectRatio, Box, Button, Flex, Grid } from '@chakra-ui/react'
import { LayoutWithTopImageAndBreadcrumb } from '@src/components/layouts/LayoutWithTopImageAndBreadcrumb'
import { Title } from '@src/components/ui/Heading/Title'
import { CaretRightIcon } from '@src/components/ui/Icon/CaretRightIcon'
import { Image } from '@src/components/ui/Image'
import { pagesPath, staticPath } from '@src/lib/$path'
import { useRouter } from 'next/router'

const TREATMENT_LIST = [
  {
    genre: '鍼灸',
    id: 'scupuncture_and_moxibustion',
    image:
      staticPath.images.Treatment.TreatmentContents
        .$1AdobeStock_217895936_Preview_jpeg,
    tags: ['鍼', '灸', 'パルス(電気鍼)', '箱灸'],
  },

  {
    genre: '整体',
    id: 'manipulative_treatment',
    image:
      staticPath.images.Treatment.TreatmentContents
        .$3AdobeStock_252774376_Preview_jpeg,
    tags: ['骨格矯正', '徒手療法'],
  },

  {
    genre: '産後骨盤矯正',
    id: 'postpartum_pelvic_correction',
    image:
      staticPath.images.Treatment.TreatmentContents
        .$4AdobeStock_410038415_Preview_jpeg,
    tags: ['産後骨盤矯正'],
  },
  {
    genre: '吸い玉',
    id: 'cupping_ball',
    image:
      staticPath.images.Treatment.TreatmentContents
        .$5AdobeStock_2653232_Preview_jpeg,
    tags: ['吸い玉'],
  },
]

export const TreatmentsContent = () => {
  const router = useRouter()

  const TREATMENTS_PAGE_BREADCRUMB = [
    {
      isCurrentPage: false,
      name: 'ホーム',
      onClick: () => router.push(pagesPath.$url()),
    },
    {
      isCurrentPage: true,
      name: '施術一覧',
    },
  ]

  return (
    <Box>
      <LayoutWithTopImageAndBreadcrumb
        breadcrumb={TREATMENTS_PAGE_BREADCRUMB}
        image={staticPath.images.TopSlider.AdobeStock_38149832_Preview_jpeg}
      />
      <Box px={10} py={4}>
        <Title>施術一覧</Title>
        <Grid
          columnGap={4}
          mt={10}
          rowGap={10}
          templateColumns={'repeat(2, 1fr)'}
        >
          {TREATMENT_LIST.map((item, index) => (
            <Box key={`TREATMENT_LIST_${index}`} overflow={'hidden'}>
              <AspectRatio overflow={'hidden'} ratio={1} rounded={'sm'}>
                <Image alt={'top_image'} layout={'fill'} src={item.image} />
              </AspectRatio>
              <Box
                color={'text.primary'}
                fontSize={'lg'}
                fontWeight={'medium'}
                mt={5}
              >
                {item.genre}
              </Box>
              <Flex flexWrap={'wrap'} fontSize={'sm'} mt={3}>
                {item.tags.map((tag, index) => (
                  <Button
                    bg={'transparent'}
                    fontWeight={'normal'}
                    height={'auto'}
                    key={index}
                    leftIcon={<CaretRightIcon color={'test.900'} />}
                    mb={2}
                    mr={2}
                    p={0}
                    onClick={() =>
                      router.push(pagesPath.treatments._pid(item.id).$url())
                    }
                  >
                    {tag}
                  </Button>
                ))}
              </Flex>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
