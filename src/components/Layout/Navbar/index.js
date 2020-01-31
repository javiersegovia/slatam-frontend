import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import SearchBar from './SearchBar'
import { StyledNavBar, NavRow, Logo } from './styled'
import NavPrimaryLinks from './NavPrimaryLinks'
import NavSecondaryLinks from './NavSecondaryLinks'
import NavSecondaryOptions from './NavSecondaryOptions'
import ResponsiveNav from './ResponsiveNav'

const NavBar = ({ children }) => {
  return (
    <>
      <StyledNavBar id="main-navbar">
        <NavRow>
          <Logo>
            <Link href="/">
              <a>
                <img src="/images/slatam-logo.svg" alt="Slatam Logo" />
              </a>
            </Link>
          </Logo>
          <SearchBar />
          <NavPrimaryLinks />
        </NavRow>
        <NavRow hideonResponsive>
          <NavSecondaryLinks />
          <NavSecondaryOptions />
        </NavRow>
      </StyledNavBar>
      <div style={{ paddingBottom: 131 }} />
      {children}
      <ResponsiveNav />
    </>
  )
}

NavBar.propTypes = {
  children: PropTypes.any.isRequired,
}

export default NavBar
