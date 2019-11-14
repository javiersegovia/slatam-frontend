import React from 'react'
import Downshift, { resetIdCounter } from 'downshift'
import Router from 'next/router'
import { ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'
import debounce from 'lodash.debounce'
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown'

const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchInput: String!) {
    items(
      where: {
        OR: [
          { title_contains: $searchInput }
          { description_contains: $searchInput }
        ]
      }
    ) {
      id
      image
      title
    }
  }
`
const routeToItem = (item, { clearSelection }) => {
  Router.push({
    pathname: '/item',
    query: {
      id: item.id
    }
  })
  clearSelection()
}

class AutoComplete extends React.Component {
  state = {
    items: [],
    loading: false
  }

  onChange = debounce(async (e, client) => {
    // turn loading on
    this.setState({
      loading: true
    })
    // manually query apollo client
    const res = await client.query({
      query: SEARCH_ITEMS_QUERY,
      variables: { searchInput: e.target.value }
    })
    this.setState({
      items: res.data.items,
      loading: false
    })
  }, 350)

  submit = (e, inputValue, clearSelection) => {
    e.preventDefault()
    Router.push({
      pathname: '/search',
      query: {
        s: inputValue
      }
    })
    clearSelection()
  }

  render() {
    resetIdCounter()
    return (
      <SearchStyles>
        <Downshift
          onChange={(item, fn) => {
            if (item) routeToItem(item, fn)
          }}
          itemToString={item => (item === null ? '' : item.title)}
        >
          {({
            getInputProps,
            getItemProps,
            isOpen,
            inputValue,
            highlightedIndex,
            clearSelection
          }) => (
            <div>
              <form
                onSubmit={e => {
                  this.submit(e, inputValue, clearSelection)
                }}
              >
                <ApolloConsumer>
                  {client => (
                    <input
                      {...getInputProps({
                        type: 'search',
                        placeholder: 'Search for an item',
                        id: 'search',
                        className: this.state.loading ? 'true' : '',
                        onChange: e => {
                          e.persist()
                          this.onChange(e, client)
                        }
                      })}
                    />
                  )}
                </ApolloConsumer>
              </form>
              {isOpen && (
                <DropDown>
                  {this.state.items.map((item, index) => (
                    <DropDownItem
                      {...getItemProps({ item })}
                      key={item.id}
                      highlighted={index === highlightedIndex}
                    >
                      <img
                        width="50"
                        height="50"
                        src={item.image}
                        alt={item.title}
                      />
                      <p>{item.title}</p>
                    </DropDownItem>
                  ))}
                  {/* {!this.state.items.length && !this.state.loading && (
                    <DropDownItem> Nothing found for {inputValue}</DropDownItem>
                  )} */}
                </DropDown>
              )}
            </div>
          )}
        </Downshift>
      </SearchStyles>
    )
  }
}

export default AutoComplete
