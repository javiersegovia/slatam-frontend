import React from 'react'
import PropTypes from 'prop-types'
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import { ThemeProvider } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'

import WindowSizeProvider from './context/WindowSize'
import AppConfigProvider from './context/AppConfig'

import theme from './theme'
import AppMeta from './AppMeta'

import '../../../public/scss/application.scss'

const AppLayout = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <WindowSizeProvider>
            <AppConfigProvider>
              <CssBaseline />
              <AppMeta />
              {children}
            </AppConfigProvider>
          </WindowSizeProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default AppLayout

AppLayout.propTypes = {
  children: PropTypes.any,
}
