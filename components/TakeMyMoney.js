import React from 'react'
// import StripeCheckout from 'react-stripe-checkout'
import { Mutation } from 'react-apollo'
import Router from 'next/router'
import NProgress from 'nprogress'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import calcTotalPrice from '../lib/calcTotalPrice'
import Error from './ErrorMessage'
import User, { CURRENT_USER_QUERY } from './User'

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`

const totalItems = cart =>
  cart.reduce((total, cartItem) => total + cartItem.quantity, 0)

class TakeMyMoney extends React.Component {
  state = {}

  onToken = (res, createOrder) => {
    console.log('onToken!!')
    console.log(res)

    // call the mutation once we have the Stripe token
    createOrder({
      variables: {
        token: res.id
      }
    }).catch(err => {
      alert(err.message)
    })
  }

  render() {
    return (
      <User>
        {({ data: { viewer } }) => (
          <Mutation
            mutation={CREATE_ORDER_MUTATION}
            refetchQueries={[{ query: CURRENT_USER_QUERY }]}
          >
            {createOrder => ({
              /* <StripeCheckout
                amount={calcTotalPrice(viewer.cart)}
                name="Sick Fits"
                description={`Order of ${totalItems(viewer.cart)} items`}
                image={viewer.cart[0].item && viewer.cart[0].item.image}
                stripeKey="pk_test_ZVAKTpGUTg7E4oZG4dhH9kCm"
                currency="USD"
                email={viewer.email}
                token={res => this.onToken(res, createOrder)}
              >
                {this.props.children}
              </StripeCheckout> */
            })}
          </Mutation>
        )}
      </User>
    )
  }
}

export default TakeMyMoney
