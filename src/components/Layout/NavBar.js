import Link from 'next/link'
import styled from 'styled-components'
import Router from 'next/router'
import NProgress from 'nprogress'
import NavLinks from './NavLinks'

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => {
  NProgress.done()
}

const Logo = styled.div`
  font-size: 40px;
  margin-left: 20px;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 5px 10px;
    background: ${props => props.theme.palette.primary.main};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`

const StyledNavBar = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`

const NavBar = () => (
  <StyledNavBar>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Slatam</a>
        </Link>
      </Logo>
      <NavLinks />
    </div>
  </StyledNavBar>
)

export default NavBar
