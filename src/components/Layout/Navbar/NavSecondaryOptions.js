import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import PublicIcon from '@material-ui/icons/Public'
import { StyledSecondaryOptions } from './styled'

const NavSecondaryOptions = props => {
  return (
    <StyledSecondaryOptions>
      <li className="Navbar__listItem">
        <button
          type="button"
          className="Navbar__listItemButton Navbar__withArrow"
        >
          <PublicIcon />
        </button>
      </li>
      {/* <button type="button" className="Navbar__listItemButton Navbar__withArrow">
        Shipping countries
      </button> */}

      <Link href="/help">
        <li className="Navbar__listItem">
          <a className="Navbar__listItemButton Navbar__withArrow">Help</a>
        </li>
      </Link>
    </StyledSecondaryOptions>
  )
}

NavSecondaryOptions.propTypes = {}

export default NavSecondaryOptions
