import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import SearchBar from './SearchBar'
import NavPrimaryLinks from './NavPrimaryLinks'
import NavSecondaryLinks from './NavSecondaryLinks'
import { StyledNavBar, NavRow, Logo } from './NavStyles'
import NavSecondaryOptions from './NavSecondaryOptions'

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => {
  NProgress.done()
}

const NavBar = () => (
  <StyledNavBar>
    <NavRow>
      <Logo>
        <Link href="/">
          <a>Slatam</a>
        </Link>
      </Logo>
      <SearchBar />
      <NavPrimaryLinks />
    </NavRow>
    <NavRow>
      <NavSecondaryLinks />
      <NavSecondaryOptions />
    </NavRow>
  </StyledNavBar>
)

export default NavBar
