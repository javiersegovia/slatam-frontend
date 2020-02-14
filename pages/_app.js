import React from 'react'
import App from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppLayout from '@components/Layout'
import { ApolloProvider } from '@apollo/react-hooks'
import withApollo from '@graphql/apollo'
import '../public/scss/application.scss'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    pageProps.query = ctx.query
    pageProps.pathname = ctx.pathname
    return { pageProps }
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, apollo, pageProps } = this.props

    return (
      <>
        <ApolloProvider client={apollo}>
          <AppLayout>
            <CssBaseline />
            <Component {...pageProps} />
          </AppLayout>
        </ApolloProvider>
      </>
    )
  }
}

export default withApollo(MyApp)
