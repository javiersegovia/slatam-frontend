import Link from 'next/link'
import NavStyles from './NavStyles'

const Nav = () => (
  <NavStyles>
    <Link href="/about">
      <a>About us</a>
    </Link>
    <Link href="/products">
      <a>Products and services</a>
    </Link>
    <Link href="/sign-in">
      <a>Sign in</a>
    </Link>
  </NavStyles>
)

export default Nav
