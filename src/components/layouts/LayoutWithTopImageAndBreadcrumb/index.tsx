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
import { ReactNode } from 'react'

type Props = {
  breadcrumb: {
    content: string | ReactNode
    isCurrentPage: boolean
    onClick?: () => void
  }[]
  image: string
} & BoxProps

export const LayoutWithTopImageAndBreadcrumb = ({
  breadcrumb,
  image,
  ...boxProps
}: Props) => {
  return (
    <Box {...boxProps}>
      <AspectRatio h={'270px'} height={''} overflow={'hidden'} ratio={14 / 4}>
        <Image alt={'top_image'} layout={'fill'} src={image} />
      </AspectRatio>
      <Breadcrumb
        alignItems={'center'}
        bg={'black.100'}
        p={2}
        px={4}
        separator={<ChevronRightIcon color={'gray.500'} />}
        spacing={'8px'}
      >
        {breadcrumb.map(({ content, isCurrentPage, onClick }, index) => (
          <BreadcrumbItem
            isCurrentPage={isCurrentPage}
            key={`BreadcrumbItem_${index}`}
          >
            <BreadcrumbLink onClick={onClick}>{content}</BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Box>
  )
}
