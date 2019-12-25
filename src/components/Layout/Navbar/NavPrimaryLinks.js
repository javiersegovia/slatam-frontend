import React from 'react'
import Link from 'next/link'
import PublicIcon from '@material-ui/icons/Public'
import { StyledPrimaryLinks } from './NavStyles'

const NotLoggedNav = () => (
  <>
    <Link href="/register">
      <a className="Navbar__navItem">Register</a>
    </Link>
    <Link href="/sign-in">
      <a className="Navbar__navItem">Sign In</a>
    </Link>
  </>
)

const LoggedInNav = () => (
  <>
    <Link href="/dashboard">
      <a className="Navbar__navItem">Orders</a>
    </Link>
    <Link href="/dashboard">
      <a className="Navbar__navItem NavLinks__HighlightItem">My account</a>
    </Link>
  </>
)

const NavLinks = () => {
  const isLoggedIn = false
  return (
    <StyledPrimaryLinks>
      {isLoggedIn ? (
        <Link href="/explore">
          <a className="Navbar__navItem">Explore</a>
        </Link>
      ) : (
        <Link href="/about">
          <a className="Navbar__navItem">Why Slatam?</a>
        </Link>
      )}
      {/* <div className="Navbar__divider" />

      <button type="button" className="Navbar__navItem Navbar__withArrow">
        <PublicIcon />
      </button> */}

      <div className="Navbar__divider" />
      {isLoggedIn ? <LoggedInNav /> : <NotLoggedNav />}
    </StyledPrimaryLinks>
  )
}

export default NavLinks
