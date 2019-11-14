import React from 'react'
import App from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppLayout from '../components/AppLayout'

// import { ApolloProvider } from 'react-apollo';
// import withData from '../lib/withData';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    // this exposes the query to the user
    pageProps.query = ctx.query
    return { pageProps }
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, apollo, pageProps } = this.props

    return (
      <>
        {/* <ApolloProvider client={apollo}> */}
        <AppLayout>
          <CssBaseline />
          <Component {...pageProps} />
        </AppLayout>
        {/* </ApolloProvider> */}
      </>
    )
  }
}

// export default withData(MyApp)
export default MyApp
