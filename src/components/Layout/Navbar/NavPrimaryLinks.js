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

    <li className="Navbar__listItem">
      <button type="button" className="Navbar__listItemButton">
        Account
      </button>
    </li>
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
    <li className="Navbar__listItem">
      <button type="button" className="Navbar__listItemButton">
        Notifications
      </button>
    </li>
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

const NavLinks = ({ isLoggedIn = true }) => {
  return (
    <StyledPrimaryLinks>
      {isLoggedIn ? <LoggedInNav /> : <NotLoggedNav />}
    </StyledPrimaryLinks>
  )
}

export default NavLinks
