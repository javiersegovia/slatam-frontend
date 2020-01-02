import React from 'react'
import PropTypes from 'prop-types'
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import { ThemeProvider } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'

import WindowSizeProvider from './context/WindowSize'

import theme from './theme'
import NavBar from './Navbar'
import AppMeta from './AppMeta'

import '../../../public/scss/application.scss'

const AppLayout = props => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <WindowSizeProvider>
            <CssBaseline />
            <AppMeta />
            <NavBar />
            {props.children}
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
