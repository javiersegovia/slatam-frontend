import React from 'react'
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
      <StyledNavBar>
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
      {children}
      <ResponsiveNav />
    </>
  )
}

export default NavBar
