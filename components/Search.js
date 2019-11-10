import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import Link from 'next/link'
import Error from './ErrorMessage'
import Title from './styles/Title'

const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($s: String!) {
    items(
      where: { OR: [{ title_contains: $s }, { description_contains: $s }] }
    ) {
      id
      title
      description
      image
    }
  }
`

const ItemRow = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 20px 0;
  border-radius: 15px;
  box-shadow: ${props => props.theme.bs};
  background: #f7f7f7;
  a {
    cursor: pointer;
  }
  img {
    object-fit: cover;
    margin-right: auto;
    margin-left: 50px;
    border-radius: 15px;
  }
  h2,
  p {
    margin: 0;
    padding-left: 20px;
  }
`

const Container = styled.div`
  text-align: center;
  width: 50%;
  margin: 0 auto;
`

const Search = props => {
  if (!props.query.s) return <p>Please use the search bar</p>
  return (
    <Query
      query={SEARCH_ITEMS_QUERY}
      variables={{
        s: props.query.s
      }}
    >
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <Error error={error} />
        return (
          <>
            <p>
              Found {data.items.length} item{data.items.length !== 1 && `s `}
              that match your criteria!
            </p>
            <Container>
              <div>
                {data.items.map(item => (
                  <Link
                    href={{
                      pathname: '/item',
                      query: {
                        id: item.id
                      }
                    }}
                  >
                    <a>
                      <ItemRow key={item.id}>
                        <img
                          width="150"
                          height="150"
                          src={item.image}
                          alt={item.title}
                        />
                        <div>
                          <Title>
                            <p>{item.title}</p>
                          </Title>
                          <p>{item.description}</p>
                        </div>
                      </ItemRow>
                    </a>
                  </Link>
                ))}
              </div>
            </Container>
          </>
        )
      }}
    </Query>
  )
}

Search.propTypes = {
  query: PropTypes.any
}

export default Search
