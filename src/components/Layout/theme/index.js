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
  },
  breakpoints,
  palette: {
    primary: {
      main: '#012d78',
    },
    secondary: {
      main: '#FFCE1B',
    },
    steelBlue: {
      main: '#007fff',
    },
    gray: {
      dark: '#82878b',
      main: '#e8ebee',
      light: '#eeeeee',
      extralight: '#FAFBFC',
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
  fonts: {
    primary: 'Geomanist',
    secondary: 'Roboto',
  },
})
