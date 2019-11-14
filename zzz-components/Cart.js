import React from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { adopt } from 'react-adopt'
import User from './User'
import CartStyles from './styles/CartStyles'
import Supreme from './styles/Supreme'
import CloseButton from './styles/CloseButton'
import SickButton from './styles/SickButton'
import CartItem from './CartItem'
import calcTotalPrice from '../lib/calcTotalPrice'
import formatMoney from '../lib/formatMoney'
import TakeMyMoney from './TakeMyMoney'

export const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
  }
`

export const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`

const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  toggleCart: ({ render }) => (
    <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>
  ),
  localState: ({ render }) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>
})

const Cart = () => (
  <Composed>
    {({ user, toggleCart, localState }) => {
      if (user.loading) return <p>Loading...</p>
      const { viewer } = user.data
      if (!viewer) return null
      return (
        <>
          <CartStyles open={localState.data.cartOpen}>
            <header>
              <CloseButton onClick={toggleCart} title="close">
                &times;
              </CloseButton>
              <Supreme>
                {viewer.name}
                {"'"}s Cart
              </Supreme>
              <p>
                You have {viewer.cart.length} item
                {viewer.cart.length > 1 && 's'} in your cart.
              </p>
            </header>
            <ul>
              {viewer.cart.map(cartItem => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))}
            </ul>
            <footer>
              <p>{formatMoney(calcTotalPrice(viewer.cart))}</p>
              <TakeMyMoney>
                <SickButton>Checkout</SickButton>
              </TakeMyMoney>
            </footer>
          </CartStyles>
        </>
      )
    }}
  </Composed>
)

export default Cart
