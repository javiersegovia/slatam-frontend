import styled from 'styled-components'
import { rgba } from 'polished'

export const StyledNavBar = styled.div`
  width: 100%;
  background: ${props => props.theme.palette.gray.extralight};
  position: relative;
  padding: 10px 0 0px;
  border-bottom: 2px solid ${props => props.theme.palette.gray.light};
  z-index: ${props => props.theme.zIndex.appBar};

  .Navbar__listItem {
    padding: 10px;
  }

  .Navbar__listItemButton {
    display: flex;
    align-items: center;
    position: relative;
    color: ${props => props.theme.palette.gray.dark};
    font-size: 1rem;
    background: none;
    border: 0;
    cursor: pointer;
    height: 100%;
  }

  .Navbar__divider {
    height: 30px;
    width: 1px;
    background: ${props => rgba(props.theme.palette.gray.dark, 0.5)};
    margin: 0 10px;
    align-self: center;
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
  padding: 15px 30px 0;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: stretch;
`

export const Logo = styled.div`
  font-size: 2.5rem;
  position: relative;
  z-index: 2;
  width: 190px;
  display: flex;
  align-items: center;

  a {
    display: inline-flex;
  }

  img {
    width: 100%;
    object-fit: contain;
  }
  @media (max-width: 1300px) {
    margin: 0;
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
  align-items: stretch;
  font-size: 1rem;
  padding: 0 0 10px 0;
  margin: 0;

  .SecondaryLinks__categories {
    padding-right: 0;
    margin-right: 30px;
    width: 190px;

    .dropdownToggler {
      margin-left: auto;
      padding-right: 10px;
    }
  }
`

export const StyledSecondaryOptions = styled.ul`
  margin: 0 0 0 auto;
  display: flex;
  align-items: stretch;
  padding: 0 0 10px 0;
`
