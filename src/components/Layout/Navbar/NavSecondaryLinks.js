import React from 'react'
import Link from 'next/link'
import { StyledSecondaryLinks } from './NavStyles'

const NavLinks = () => {
  return (
    <StyledSecondaryLinks>
      <button type="button" className="Navbar__navItem Navbar__withArrow">
        Categories
      </button>

      <Link href="/explore">
        <a className="Navbar__navItem">Best sellers</a>
      </Link>

      <Link href="/request-quotation">
        <a className="Navbar__navItem">Request for quotation</a>
      </Link>
      <div className="Navbar__divider" />
      <Link href="/get-started">
        <a className="Navbar__navItem Navbar__highlightItem">Get started now</a>
      </Link>
    </StyledSecondaryLinks>
  )
}

export default NavLinks
