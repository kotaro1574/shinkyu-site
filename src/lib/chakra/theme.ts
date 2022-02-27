/* eslint-disable sort-keys-fix/sort-keys-fix */
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      // cssのセレクタを指定するため無効化
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'html, body, #__next': {
        height: '100%',
      },
    },
  },
  colors: {
    black: {
      50: '#F7F7F7',
      100: '#F4F4F4',
      200: '#E3E3E3',
      300: '#D1D1D1',
      400: '#ACACAC',
      500: '#969696',
      600: '#646464',
      700: '#515151',
      800: '#333333',
      900: '#222226',
    },
    terugreen: {
      50: '#E3F8FF',
      100: '#B8EDFF',
      200: '#89E2FE',
      300: '#5CD6FA',
      400: '#3ECDF5',
      500: '#34C4F0',
      600: '#2DB4DC',
      700: '#219FC0',
      800: '#0D92A6',
      900: '#006979',
    },
    bronze: {
      50: '#FFFAE6',
      100: '#FFF1C2',
      200: '#FFE99B',
      300: '#FFE174',
      400: '#FFDA56',
      500: '#FFD438',
      600: '#FBC234',
      700: '#E5AD2F',
      800: '#CE972B',
      900: '#A97322',
    },
    red: {
      500: '#C63D32',
    },
    green: {
      500: '#2FBD2F',
    },
    line: {
      dark: '#DEDEDE',
      light: '#E9E9E9',
    },
    text: {
      primary: '#333333',
      secondary: '#969696',
    },
    form: {
      bronze: {
        500: '#A97322',
      },
      terugreen: {
        500: '#006979',
      },
    },
  },
  fontSizes: {
    '2xl': '20px',
    xl: '18px',
    lg: '16px',
    md: '15px',
    sm: '14px',
    xs: '13px',
    xxs: '12px',
  },
})
