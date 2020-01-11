import React from 'react'
import PropTypes from 'prop-types'
import HomeIcon from '@material-ui/icons/Home'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PersonIcon from '@material-ui/icons/Person'
import MenuIcon from '@material-ui/icons/Menu'
import Link from 'next/link'
import { StyledResponsiveNav, ResponsiveNavPadding } from './styled'

const ResponsiveNav = props => {
  return (
    <>
      <StyledResponsiveNav>
        <ul className="ResponsiveNav__list">
          <li className="ResponsiveNav__listItem">
            <Link href="/">
              <a className="ResponsiveNav__listButton">
                <HomeIcon />
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li className="ResponsiveNav__listItem">
            <Link href="/notifications">
              <a className="ResponsiveNav__listButton">
                <NotificationsIcon />
                <span>Notifications</span>
              </a>
            </Link>
          </li>
          <li className="ResponsiveNav__listItem">
            <Link href="/cart">
              <a className="ResponsiveNav__listButton">
                <ShoppingCartIcon />
                <span>Cart</span>
              </a>
            </Link>
          </li>
          <li className="ResponsiveNav__listItem">
            <Link href="/account">
              <a className="ResponsiveNav__listButton">
                <PersonIcon />
                <span>Account</span>
              </a>
            </Link>
          </li>
          <li className="ResponsiveNav__listItem">
            <button className="ResponsiveNav__listButton" type="button">
              <MenuIcon />
              <span>More</span>
            </button>
          </li>
        </ul>
      </StyledResponsiveNav>
      <ResponsiveNavPadding />
    </>
  )
}

ResponsiveNav.propTypes = {}

export default ResponsiveNav
