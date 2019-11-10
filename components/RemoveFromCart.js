import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { CURRENT_USER_QUERY } from './User'

export const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: ${props => props.theme.red};
    cursor: pointer;
  }
`

const RemoveFromCart = ({ cartItemId }) => {
  const update = (cache, payload) => {
    // 1. first read the cache
    const data = cache.readQuery({ query: CURRENT_USER_QUERY })

    // 2. remove that item from the cart cache
    const cartItemToDeleteId = payload.data.removeFromCart.id
    data.viewer.cart = data.viewer.cart.filter(
      cartItem => cartItem.id !== cartItemToDeleteId
    )

    // 3. write it back to the cache
    cache.writeQuery({ query: CURRENT_USER_QUERY, data })
  }
  return (
    <Mutation
      mutation={REMOVE_FROM_CART_MUTATION}
      variables={{
        id: cartItemId
      }}
      update={update}
      optimisticResponse={{
        __typename: 'Mutation',
        removeFromCart: {
          id: cartItemId,
          __typename: 'CartItem'
        }
      }}
    >
      {(removeFromCart, { loading }) => (
        <BigButton
          disabled={loading}
          type="button"
          onClick={() => {
            // eslint-disable-next-line
          removeFromCart().catch(err => console.log(err.message))
          }}
          title="Delete Item"
        >
          &times;
        </BigButton>
      )}
    </Mutation>
  )
}

RemoveFromCart.propTypes = {
  cartItemId: PropTypes.string.isRequired
}

export default RemoveFromCart
