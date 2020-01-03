import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink, split } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { getMainDefinition } from 'apollo-utilities'
import withApollo from 'next-with-apollo'
import gql from 'graphql-tag'
import fetch from 'isomorphic-unfetch'

const GRAPHQL_URL =
  process.env.NODE_ENV === 'development'
    ? process.env.DEV_GRAPHQL_API
    : process.env.DEV_GRAPHQL_API

// const GRAPHQL_WS =
//   process.env.NODE_ENV === 'development'
//     ? process.env.DEV_GRAPHQL_WS
//     : process.env.DEV_GRAPHQL_WS

const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
  }
`

const GRAPHQL_WS = false

export default withApollo(
  ({ headers = {}, initialState = {} }) => {
    const ssrMode = !process.browser

    const httpLink = createHttpLink({
      fetch, // Switches between unfetch & node-fetch for client & server.
      uri: GRAPHQL_URL,
    })

    const wsLink =
      !ssrMode &&
      GRAPHQL_WS &&
      new WebSocketLink({
        uri: GRAPHQL_WS,
        options: {
          reconnect: true,
          connectionParams: {
            authorization: headers.authorization,
          },
        },
      })

    const contextLink = setContext(async () => ({
      fetchOptions: {
        credentials: 'include',
      },
      headers,
    }))

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(err =>
          console.log(`[GraphQL error]: Message: ${err.message}`)
        )
      }
      if (networkError) console.log(`[Network error]: ${networkError}`)
    })

    const link = wsLink
      ? split(
          ({ query }) => {
            const { kind, operation } = getMainDefinition(query)
            return (
              kind === 'OperationDefinition' && operation === 'subscription'
            )
          },
          wsLink,
          ApolloLink.from([errorLink, contextLink, httpLink])
        )
      : ApolloLink.from([errorLink, contextLink, httpLink])

    const client = new ApolloClient({
      name: 'web',
      ssrMode,
      link,
      cache: new InMemoryCache().restore(initialState),
      connectToDevTools: true,
      resolvers: {
        Mutation: {
          toggleCart(_, variables, { cache }) {
            // read the cartOpen value from the cache
            const { cartOpen } = cache.readQuery({
              query: LOCAL_STATE_QUERY,
            })
            const data = {
              data: { cartOpen: !cartOpen },
            }
            cache.writeData(data)
            return data
          },
        },
      },
    })

    client.writeData({
      data: {
        cartOpen: false,
      },
    })

    return client
  },
  { getDataFromTree: 'ssr' }
)
