import React from 'react'
import Head from 'next/head'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Link from 'next/link'
import PaginationStyles from './styles/PaginationStyles'
import { perPage } from '../config'

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`

const Pagination = props => (
  <Query query={PAGINATION_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error!!!</p>
      const { count } = data.itemsConnection.aggregate
      const pages = Math.ceil(count / perPage)
      const { page } = props
      return (
        <PaginationStyles>
          {page > 1 && (
            <Head>
              <title>
                Sick Fits | Page {page} of {pages}
              </title>
            </Head>
          )}
          <Link
            href={{
              pathname: 'items',
              query: { page: page - 1 }
            }}
          >
            <a className="prev" aria-disabled={page <= 1}>
              « Prev
            </a>
          </Link>
          <p>
            Page {page} of {pages}
          </p>
          <p>{count} total items</p>
          <Link
            prefetch
            href={{
              pathname: 'items',
              query: { page: page + 1 }
            }}
          >
            <a className="prev" aria-disabled={page >= pages}>
              Next »
            </a>
          </Link>
        </PaginationStyles>
      )
    }}
  </Query>
)

export default Pagination
