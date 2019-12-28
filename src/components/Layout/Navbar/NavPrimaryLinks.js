import React from 'react'
import Link from 'next/link'
import PublicIcon from '@material-ui/icons/Public'
import { StyledPrimaryLinks } from './NavStyles'

const NotLoggedNav = () => (
  <>
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
    <Link href="/dashboard">
      <li className="Navbar__listItem">
        <a className="Navbar__listItemButton">Orders</a>
      </li>
    </Link>
    <Link href="/dashboard">
      <li className="Navbar__listItem">
        <a className="Navbar__listItemButton NavLinks__HighlightItem">
          My account
        </a>
      </li>
    </Link>
  </>
)

const NavLinks = () => {
  const isLoggedIn = false
  return (
    <StyledPrimaryLinks>
      {isLoggedIn ? (
        <Link href="/explore">
          <li className="Navbar__listItem">
            <a className="Navbar__listItemButton">Explore</a>
          </li>
        </Link>
      ) : (
        <Link href="/about">
          <li className="Navbar__listItem">
            <a className="Navbar__listItemButton">Why Slatam?</a>
          </li>
        </Link>
      )}
      {/* <div className="Navbar__divider" />

      <button type="button" className="Navbar__listItemButton Navbar__withArrow">
        <PublicIcon />
      </button> */}

      <div className="Navbar__divider" />
      {isLoggedIn ? <LoggedInNav /> : <NotLoggedNav />}
    </StyledPrimaryLinks>
  )
}

export default NavLinks
