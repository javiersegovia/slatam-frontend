import React from 'react'
import PropTypes from 'prop-types'
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from './theme'

import NavBar from './NavBar'
import AppMeta from './AppMeta'

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`

const GlobalStyle = createGlobalStyle`
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
    line-height: 2;
    font-family: 'Roboto';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`
const AppLayout = props => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledPage>
          <AppMeta />
          <NavBar />
          {props.children}
        </StyledPage>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
)

export default AppLayout

AppLayout.propTypes = {
  children: PropTypes.any,
}
