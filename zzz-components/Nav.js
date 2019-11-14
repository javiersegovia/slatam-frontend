import Link from 'next/link'
import { Mutation } from 'react-apollo'
import { TOGGLE_CART_MUTATION } from './Cart'
import NavStyles from './styles/NavStyles'
import User from './User'
import SignOut from './SignOut'
import CartCount from './CartCount'

const Nav = () => (
  <User>
    {({ data: { viewer } }) => (
      <NavStyles>
        <Link href="/items">
          <a>Shop</a>
        </Link>
        {viewer && (
          <>
            <Link href="/sell">
              <a>Sell</a>
            </Link>
            <Link href="/orders">
              <a>Orders</a>
            </Link>
            <Link href="/account">
              <a>Account</a>
            </Link>
            <SignOut viewer={viewer}>
              {signOut => (
                <button type="button" onClick={signOut}>
                  Sign Out
                </button>
              )}
            </SignOut>
            <Mutation mutation={TOGGLE_CART_MUTATION}>
              {toggleCart => (
                <button type="button" onClick={toggleCart}>
                  My cart
                  <CartCount
                    count={viewer.cart.reduce(
                      (total, cartItem) => total + cartItem.quantity,
                      0
                    )}
                  />
                </button>
              )}
            </Mutation>
          </>
        )}
        {!viewer && (
          <Link href="/signup">
            <a>Sign In</a>
          </Link>
        )}
      </NavStyles>
    )}
  </User>
)

export default Nav
