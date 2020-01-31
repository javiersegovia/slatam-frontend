import styled from 'styled-components'
import { rgba } from 'polished'

export const StyledNavBar = styled.div`
  width: 100%;
  background: ${props => props.theme.palette.gray.extralight};
  position: absolute;
  padding: 10px 0 0px;
  border-bottom: 2px solid ${props => props.theme.palette.gray.light};
  z-index: ${props => props.theme.zIndex.appBar};

  ${props => props.theme.breakpoints.down('md')} {
    padding: 20px 0;
  }

  .body__open-popper & {
    padding-right: 17px;
  }

  .Navbar__listItemButton {
    display: flex;
    align-items: center;
    position: relative;
    color: ${props => props.theme.palette.gray.dark};
    font-size: 0.9375rem;
    letter-spacing: 0.5px;
    background: none;
    border: 0;
    cursor: pointer;
    height: 100%;
    padding: 10px;
  }

  .Navbar__listItemSvg {
    font-size: 2rem;
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
      border-style: solid;
      border-width: 0 1.5px 1.5px 0;
      display: inline-block;
      margin-left: 6px;
      margin-bottom: 0;
      padding: 1.75px;
      transform: rotate(45deg);
      transition: all 0.15s ease;
    }
    &.opened {
      &:after {
        transform: rotate(-135deg);
        margin-bottom: -3px;
      }
    }
  }
`

export const NavRow = styled.div`
  padding: 10px 30px 0;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: stretch;

  ${props => props.theme.breakpoints.down('md')} {
    display: ${props => (props.hideOnResponsive ? 'none' : 'flex')};
    padding: 0 30px;
  }
  ${props => props.theme.breakpoints.down('sm')} {
    padding: 0 15px;
  }
`

export const Logo = styled.div`
  font-size: 2.5rem;
  position: relative;
  z-index: 2;
  width: 190px;
  display: flex;
  align-items: center;

  ${props => props.theme.breakpoints.down('md')} {
    min-width: 140px;
  }

  ${props => props.theme.breakpoints.down('xs')} {
    min-width: 100px;
    max-width: 140px;
  }

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

  ${props => props.theme.breakpoints.down('md')} {
    display: none;
  }

  li:last-child a,
  li:last-child button {
    padding-right: 0;
  }

  .Navbar__accountButton {
    color: ${props => props.theme.palette.blue.main};
    svg {
      font-size: 2rem;
    }
  }

  .PrimaryLinks__popper {
    z-index: 11;
  }
`
export const StyledSecondaryLinks = styled.ul`
  display: flex;
  align-items: stretch;
  font-size: 1rem;
  padding: 0 0 10px 0;
  margin: 0;

  ${props => props.theme.breakpoints.down('md')} {
    display: none;
  }

  .SecondaryLinks__categories {
    padding-right: 0;
    margin-right: 30px;
    width: 190px;
    display: flex;

    & > div {
      margin-left: auto;
    }

    .opened {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`

export const StyledSecondaryOptions = styled.ul`
  margin: 0 0 0 auto;
  display: flex;
  align-items: stretch;
  padding: 0 0 10px 0;
  z-index: 10;

  & > li.Navbar__listItem:nth-child(3) {
    a,
    button {
      padding-right: 0;
    }
  }

  ${props => props.theme.breakpoints.down('md')} {
    display: none;
  }

  .opened {
    color: ${props => props.theme.palette.primary.main};
  }

  div[role='tooltip'] {
    left: 0;
  }
`
