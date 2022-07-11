import { Box } from '@chakra-ui/react'
import { LayoutWithTopImageAndBreadcrumb } from '@src/components/layouts/LayoutWithTopImageAndBreadcrumb'
import { ContentItem } from '@src/components/ui/Content/ContentItem'
import { Title } from '@src/components/ui/Heading/Title'
import { HomeIcon } from '@src/components/ui/Icon/HomeIcon/HomeIcon'
import { TREATMENT_DETAIL_CONTENTS } from '@src/constants/treatments'
import { pagesPath, staticPath } from '@src/lib/$path'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

export const TreatmentContent = () => {
  const router = useRouter()
  const TREATMENT_PAGE_BREADCRUMB = [
    {
      content: <HomeIcon h={5} verticalAlign={'sub'} w={5} />,
      isCurrentPage: false,
      onClick: () => router.push(pagesPath.$url()),
    },
    {
      content: '施術一覧',
      isCurrentPage: false,
      onClick: () => router.push(pagesPath.treatments.$url()),
    },
    {
      content: '鍼灸',
      isCurrentPage: true,
    },
  ]

  const pageItems = useMemo(() => {
    return TREATMENT_DETAIL_CONTENTS.filter(
      (content) => content.id === router.query.pid
    )
  }, [router.query.pid])

  return (
    <>
      <LayoutWithTopImageAndBreadcrumb
        breadcrumb={TREATMENT_PAGE_BREADCRUMB}
        image={staticPath.natsumi.treatment_top_jpg}
      />
      <Box p={8} pt={6}>
        {pageItems.map((item) => (
          <>
            <Title>{item.title}</Title>
            {item.contents.map((content, i) => (
              <ContentItem {...content} key={`${item.title}_${i}`} mt={10} />
            ))}
          </>
        ))}
      </Box>
    </>
  )
}
