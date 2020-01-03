import React from 'react'
import Link from 'next/link'
import { StyledPrimaryLinks } from './styled'

const NotLoggedNav = () => (
  <>
    <Link href="/about">
      <li className="Navbar__listItem">
        <a className="Navbar__listItemButton">Why Slatam?</a>
      </li>
    </Link>
    <div className="Navbar__divider" />

    <Link href="/register">
      <li className="Navbar__listItem">
        <a className="Navbar__listItemButton">Register</a>
      </li>
    </Link>
    <Link href="/sign-in">
      <li className="Navbar__listItem">
        <a className="Navbar__listItemButton">Sign In</a>
      </li>
    </Link>
  </>
)

const LoggedInNav = () => (
  <>
    <Link href="/explore">
      <li className="Navbar__listItem">
        <a className="Navbar__listItemButton">Explore</a>
      </li>
    </Link>
    <div className="Navbar__divider" />
    <Link href="/dashboard">
      <li className="Navbar__listItem">
        <a className="Navbar__listItemButton NavLinks__HighlightItem">
          My account
        </a>
      </li>
    </Link>
    <Link href="/dashboard">
      <li className="Navbar__listItem">
        <a className="Navbar__listItemButton">Cart</a>
      </li>
    </Link>
  </>
)

const NavLinks = ({ isLoggedIn = false }) => {
  return (
    <StyledPrimaryLinks>
      {isLoggedIn ? <LoggedInNav /> : <NotLoggedNav />}
    </StyledPrimaryLinks>
  )
}

export default NavLinks
