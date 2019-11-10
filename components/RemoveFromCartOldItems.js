import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { CURRENT_USER_QUERY } from './User'

const REMOVE_FROM_CART_OLD_ITEMS_MUTATION = gql`
  mutation REMOVE_FROM_CART_OLD_ITEMS_MUTATION($ids: [ID!]!) {
    removeFromCartOldItems(ids: $ids) {
      count
    }
  }
`

const RemoveFromCartOldItems = ({ oldItems }) => {
  const ids = oldItems.map(i => i.id)
  const update = (cache, payload) => {
    // 1. first read the cache
    const data = cache.readQuery({ query: CURRENT_USER_QUERY })

    console.log(data)
    console.log(payload)
    return
    // 2. remove that item from the cart cache
    const oldCartItemsToDeleteId = payload.data.removeFromCart.id
    data.viewer.cart = data.viewer.cart.filter(
      cartItem => cartItem.id !== cartItemToDeleteId
    )

    // 3. write it back to the cache
    cache.writeQuery({ query: CURRENT_USER_QUERY, data })
  }

  // const remove = async () => {
  //   await client.mutate({
  //     mutation: REMOVE_FROM_CART_OLD_ITEMS_MUTATION,
  //     variables: { ids }
  //   })
  // }
  // remove(client, ids)

  return (
    <Mutation
      mutation={REMOVE_FROM_CART_OLD_ITEMS_MUTATION}
      variables={{ ids }}
      update={update}
    >
      {remove => {
        remove()
        return null
      }}
    </Mutation>
  )
}

export default RemoveFromCartOldItems
