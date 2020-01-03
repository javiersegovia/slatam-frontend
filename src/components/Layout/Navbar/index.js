import React, { useContext, useState, useEffect } from 'react'
import { WindowSizeContext } from '@components/Layout/context/WindowSize'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import SearchBar from './SearchBar'
import { StyledNavBar, NavRow, Logo } from './styled'
import NavPrimaryLinks from './NavPrimaryLinks'
import NavSecondaryLinks from './NavSecondaryLinks'
import NavSecondaryOptions from './NavSecondaryOptions'
import ResponsiveNav from './ResponsiveNav'

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => {
  NProgress.done()
}

const NavBar = () => {
  const getWindowSize = useContext(WindowSizeContext)
  const [windowSize, setWindowSize] = useState(null)
  const isResponsive = getWindowSize.width < 992

  useEffect(() => {
    if (getWindowSize && getWindowSize.width) setWindowSize(getWindowSize)
  }, [windowSize])

  return windowSize && windowSize.width ? (
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
          <SearchBar isResponsive={isResponsive} />
          {!isResponsive && <NavPrimaryLinks />}
        </NavRow>
        {!isResponsive && (
          <NavRow hideonResponsive>
            <NavSecondaryLinks />
            <NavSecondaryOptions />
          </NavRow>
        )}
      </StyledNavBar>
      {isResponsive && <ResponsiveNav />}
    </>
  ) : null
}

export default NavBar
