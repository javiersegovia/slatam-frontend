import React from 'react'
import Link from 'next/link'
import NavStyles from './NavStyles'

const NavLinks = () => (
  <NavStyles>
    <Link href="/items">
      <a>Items</a>
    </Link>
    <Link href="/items/new">
      <a>Create Item</a>
    </Link>
    <Link href="/sign-in">
      <a>Sessions</a>
    </Link>
  </NavStyles>
)

export default NavLinks
