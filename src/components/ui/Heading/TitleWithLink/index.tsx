import { Box, Flex, Spacer } from '@chakra-ui/react'
import { Title } from '@src/components/ui/Heading/Title'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  link?: string
}

export const TitleWithLink = ({ children, link = 'もっと見る' }: Props) => {
  return (
    <Flex alignItems={'flex-end'}>
      <Title>{children}</Title>
      <Spacer />
      <Box color={'text.primary'} fontSize={'xs'}>
        {`${link} >`}
      </Box>
    </Flex>
  )
}
