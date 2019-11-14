import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { ALL_ITEMS_QUERY } from './Items'
import { CURRENT_USER_QUERY } from './User'

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    removeFromCarts(id: $id) {
      id
    }
    deleteItem(id: $id) {
      id
    }
  }
`

export default class DeleteItem extends Component {
  update = (cache, payload) => {
    // manually update the cache on the client, so it matches the server
    // 1. Read the cache for the items we want
    const allItems = cache.readQuery({ query: ALL_ITEMS_QUERY })
    const data = cache.readQuery({ query: CURRENT_USER_QUERY })

    // 2. check if the item deleted was in this user cart
    // if it was, delete it
    if (payload.data.removeFromCarts.length > 0) {
      const ids = payload.data.removeFromCarts.map(i => i.id)
      data.viewer.cart = data.viewer.cart.filter(
        cartItem => !ids.includes(cartItem.id)
      )
    }

    // 2. Filter the deleted item out of the cached items
    allItems.items = allItems.items.filter(
      item => item.id !== payload.data.deleteItem.id
    )
    // 3. Put the items back to te cache
    cache.writeQuery({ query: CURRENT_USER_QUERY, data })
    cache.writeQuery({ query: ALL_ITEMS_QUERY, data: allItems })
  }

  render() {
    return (
      <Mutation
        mutation={DELETE_ITEM_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {deleteItem => (
          <button
            type="button"
            onClick={() => {
              // eslint-disable-next-line
              if (confirm('Are you sure?')) deleteItem().catch(err => { alert(err.message) })
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    )
  }
}
