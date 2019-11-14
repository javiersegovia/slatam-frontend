import React from 'react'
import PropTypes from 'prop-types'
import { StylesProvider } from '@material-ui/styles'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
// import Header from './Header'
import Meta from './AppMeta'

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
}

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`
// eslint-disable-next-line
const GlobalStyle = createGlobalStyle`
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
        {/* <Header /> */}
        <Inner>{props.children}</Inner>
      </StyledPage>
    </ThemeProvider>
  </StylesProvider>
)

export default AppLayout

AppLayout.propTypes = {
  children: PropTypes.any
}
