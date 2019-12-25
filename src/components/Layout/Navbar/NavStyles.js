import styled from 'styled-components'
import { rgba } from 'polished'

export const StyledNavBar = styled.div`
  width: 100%;
  background: ${props => props.theme.palette.gray.light};
  position: relative;
  padding: 15px 0 15px;
  box-shadow: ${props => props.theme.bShadows.searchBar};

  .Navbar__navItem {
    display: flex;
    align-items: center;
    position: relative;
    color: ${props => props.theme.palette.gray.dark};
    font-size: 1rem;
    background: none;
    border: 0;
    cursor: pointer;
    padding: 0px 15px;
  }

  .Navbar__divider {
    height: 20px;
    width: 1px;
    background: ${props => rgba(props.theme.palette.gray.dark, 0.5)};
    margin: 0 10px;
  }

  .Navbar__highlightItem {
    color: ${props => props.theme.palette.primary.main};
  }

  .Navbar__withArrow {
    &:after {
      content: '';
      border: solid ${props => props.theme.palette.gray.dark};
      border-width: 0 1.5px 1.5px 0;
      display: inline-block;
      margin-left: 7px;
      padding: 3px;
      transform: rotate(45deg);
    }
  }
`

export const NavRow = styled.div`
  padding: 0 30px;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
`

export const Logo = styled.div`
  font-size: 2.5rem;
  position: relative;
  z-index: 2;
  a {
    color: ${props => props.theme.palette.primary.main};
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`

export const StyledPrimaryLinks = styled.ul`
  margin: 0 0 0 auto;
  padding: 0 0 0 30px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  a:last-child,
  button:last-child {
    padding-right: 0;
  }
`
export const StyledSecondaryLinks = styled.ul`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0;
  margin: 10px 0;
  a:first-child,
  button:first-child {
    padding-left: 0;
  }
`
