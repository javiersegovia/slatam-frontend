import React from 'react'
import PropTypes from 'prop-types'
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from './theme'
import NavBar from './Navbar'
import AppMeta from './AppMeta'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Geomanist';
    src: url('/fonts/Geomanist-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Geomanist';
    src: url('/fonts/Geomanist-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Geomanist';
    src: url('/fonts/Geomanist-Regular-Italic.otf') format('opentype');
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'Geomanist';
    src: url('/fonts/Geomanist-Medium.woff2') format('woff2'),
      url('/fonts/Geomanist-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Geomanist';
    src: url('/fonts/Geomanist-Bold.woff2') format('woff2'),
      url('/fonts/Geomanist-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'radnika_next';
    src: url('/fonts/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 16px;
    overflow-y: scroll;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
    font-family: ${theme.fonts.primary};
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }

  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 2rem;
  }

  h5 {
    font-size: 1.5rem;
  }

  h6 {
    font-size: 1.25rem;
  }

  p {
    font-size: 0.875rem;
  }
  input {
    font-family: ${theme.fonts.primary};
    letter-spacing: 0.35px;
    padding: 0;
  }
  button {
    outline: none;
    border: none;
    background: none;
    font-size: 1rem;
    font-family: ${theme.fonts.primary};
  }
`

const AppLayout = props => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        <AppMeta />
        <NavBar />
        {props.children}
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
)

export default AppLayout

AppLayout.propTypes = {
  children: PropTypes.any,
}
