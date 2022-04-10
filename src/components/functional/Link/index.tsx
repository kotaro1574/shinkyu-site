import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'
import { PagesPath, pagesPath } from '@src/lib/$path'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import type { UrlObject } from 'url'

export type LinkProps = {
  href: `http${string}` | ((path: PagesPath) => UrlObject) | UrlObject
} & Omit<NextLinkProps, 'as' | 'href'> &
  Omit<ChakraLinkProps, 'as' | 'href'>

/**
 * @see https://nextjs.org/docs/api-reference/next/link
 * @see https://github.com/vercel/next.js/blob/canary/packages/next/client/link.tsx
 * @see https://github.com/47ng/chakra-next/blob/next/src/components/links.tsx
 */
export const Link = ({
  href,
  locale,
  prefetch,
  replace,
  scroll,
  shallow,
  ...chakraLinkProps
}: LinkProps) => {
  // noinspection SuspiciousTypeOfGuard
  if (typeof href === 'string') {
    return (
      <ChakraLink
        isExternal
        _hover={{ textDecoration: 'none' }}
        href={href}
        rel={'noopener noreferrer'}
        target={'_blank'}
        {...chakraLinkProps}
      />
    )
  }

  return (
    <NextLink
      passHref
      href={typeof href === 'function' ? href(pagesPath) : href}
      locale={locale}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      <ChakraLink _hover={{ textDecoration: 'none' }} {...chakraLinkProps} />
    </NextLink>
  )
}
