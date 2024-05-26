/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  privacyPolicy: {
    $url: (url?: { hash?: string }) => ({ pathname: '/privacyPolicy' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
