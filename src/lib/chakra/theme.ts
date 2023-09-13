/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      // cssのセレクタを指定するため無効化
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'html, body, #__next': {
        height: '100%',
        color: 'text.primary',
        letterSpacing: '0.12em',
      },
    },
  },
  fonts: {
    heading: "'Noto Sans JP', sans-serif;",
    body: "'Noto Sans JP', sans-serif;",
  },
  colors: {
    green: {
      500: '#61C359',
      line: '#2FBD2F',
    },
    bg: {
      dark: '#767676',
      light: '#FEEABC',
    },
    line: {
      dark: '#DEDEDE',
      light: '#E9E9E9',
    },
    text: {
      primary: '#333333',
      secondary: '#969696',
    },
  },
  fontSizes: {
    '7xl': '34px',
    '6xl': '30px',
    '5xl': '26px',
    '4xl': '24px',
    '3xl': '22px',
    '2xl': '20px',
    xl: '18px',
    lg: '16px',
    md: '15px',
    sm: '14px',
    xs: '13px',
    xxs: '12px',
  },
})
