import { createMuiTheme } from '@material-ui/core/styles'
import breakpoints from './breakpoints'

export default createMuiTheme({
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  bShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  breakpoints,
  palette: {
    primary: {
      main: '#0006BF'
    },
    secondary: {
      main: '#FFCE1B'
    }
  }
})
