import React from 'react'
import PropTypes from 'prop-types'
import { StylesProvider } from '@material-ui/styles'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from './theme'

import Header from './Header'
import Meta from './AppMeta'

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Geomanist';
    src: url('/static/Geomanist-Medium.woff2') format('woff2'),
      url('/static/Geomanist-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Geomanist';
    src: url('/static/Geomanist-Bold.woff2') format('woff2'),
      url('/static/Geomanist-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('/static/Roboto-Bold.ttf') format('ttf');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('/static/Roboto-Light.ttf') format('ttf');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`
const AppLayout = props => (
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledPage>
        <Meta />
        <Header />
        <Inner>{props.children}</Inner>
      </StyledPage>
    </ThemeProvider>
  </StylesProvider>
)

export default AppLayout

AppLayout.propTypes = {
  children: PropTypes.any
}
