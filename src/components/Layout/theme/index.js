import { createMuiTheme } from '@material-ui/core/styles'
import breakpoints from './breakpoints'

export default createMuiTheme({
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  bShadows: {
    cards: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
    searchBar: '0 0 6px 0 rgba(0, 0, 0, 0.16)',
    menuDropdown: '0 0px 7px 0px rgba(0,0,0,0.16)',
    inputText: '0 0 6px 0 rgba(0,0,0,0.1) inset',
    product: '1px 2px 20px 4px rgba(0, 0, 0, 0.08)',
    button: '0 4px 6px rgba(50, 50, 93, 0.08), 0 1px 3px rgba(0,0,0,.08)',
  },
  breakpoints,
  palette: {
    primary: {
      main: '#002882',
      light: '#0033a7',
    },
    secondary: {
      main: '#FFCE1B',
      light: '#FFE37E',
    },
    steelBlue: {
      main: '#007fff',
    },
    blue: {
      main: '#0f4eff',
    },
    gray: {
      dark: '#82878b',
      main: '#e8ebee',
      light: '#eeeeee',
      extralight: '#FAFBFC',
    },
    slategray: {
      dark: '#374456',
      main: '#647a99',
      light: '#92a7ba',
      extralight: '#b7d0e2',
    },
    snow: {
      main: '#d5dbe3',
      light: '#f4f6f8',
      extralight: '#f9fafb',
    },
    gold: {
      main: '#FFAB00',
    },
    orange: {
      main: '#FF5630',
    },
    black: {
      main: '#292929',
    },
  },
  typography: {
    fontFamily: 'Geomanist',
  },
  fonts: {
    primary: 'Geomanist',
    secondary: 'BentonSans',
  },
})
