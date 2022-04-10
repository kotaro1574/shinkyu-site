import { Flex, Spacer } from '@chakra-ui/react'
import { Link, LinkProps } from '@src/components/functional/Link'
import { Title } from '@src/components/ui/Heading/Title'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  linkText?: string
} & LinkProps

export const TitleWithLink = ({
  children,
  href,
  linkText = 'もっと見る',
}: Props) => {
  return (
    <Flex alignItems={'flex-end'}>
      <Title>{children}</Title>
      <Spacer />
      <Link color={'text.primary'} fontSize={'xs'} href={href}>
        {`${linkText} >`}
      </Link>
    </Flex>
  )
}
