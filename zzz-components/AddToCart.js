import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { CURRENT_USER_QUERY } from './User'

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`
const AddToCart = ({ item }) => {
  const update = (cache, payload) => {
    const { addToCart } = payload.data

    // 1. first read the cache
    const data = cache.readQuery({ query: CURRENT_USER_QUERY })

    // 2. check if they already have the item
    const itemAlreadyInCart = data.viewer.cart.find(
      cartItem => cartItem.id === addToCart.id
    )

    // 3. if they have the cartItem, update the quantity.
    // if not, push the new cartItem

    if (!itemAlreadyInCart) {
      data.viewer.cart.push({
        id: addToCart.id,
        quantity: addToCart.quantity,
        item,
        __typename: 'CartItem'
      })
    }

    // 4. write it back to the cache
    cache.writeQuery({ query: CURRENT_USER_QUERY, data })
  }
  return (
    <Mutation
      mutation={ADD_TO_CART_MUTATION}
      variables={{
        id: item.id
      }}
      update={update}
    >
      {(addToCart, { loading }) => (
        <button disabled={loading} onClick={addToCart} type="button">
          Add{loading && 'ing'} to cart
        </button>
      )}
    </Mutation>
  )
}

export default AddToCart
