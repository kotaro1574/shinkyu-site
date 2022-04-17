import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  AspectRatio,
  Box,
  BoxProps,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { PagesPath } from '@src/lib/$path'
import { useRouter } from 'next/router'

type Props = {
  breadcrumb: {
    name: string
    path: PagesPath | null
  }[]
  image: string
} & BoxProps

export const LayoutWithTopImageAndBreadcrumb = ({
  breadcrumb,
  image,
  ...boxProps
}: Props) => {
  const router = useRouter()
  const onClickPageTransition = async (
    path: PagesPath | null
  ): Promise<void> => {
    if (!path) return
    await router.push(path.$url())
  }

  return (
    <Box {...boxProps}>
      <AspectRatio h={'270px'} height={''} overflow={'hidden'} ratio={14 / 4}>
        <Image alt={'top_image'} layout={'fill'} src={image} />
      </AspectRatio>
      <Breadcrumb
        bg={'black.100'}
        p={2}
        px={4}
        separator={<ChevronRightIcon color={'gray.500'} />}
        spacing={'8px'}
      >
        {breadcrumb.map((item, index) => (
          <BreadcrumbItem
            isCurrentPage={!item.path}
            key={`BreadcrumbItem_${index}`}
          >
            <BreadcrumbLink onClick={() => onClickPageTransition(item.path)}>
              {item.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Box>
  )
}
