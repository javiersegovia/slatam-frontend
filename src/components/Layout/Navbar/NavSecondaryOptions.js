import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'
import PublicIcon from '@material-ui/icons/Public'

const StyledOptions = styled.div`
  margin: 0 0 0 auto;
  display: flex;
  align-items: center;

  a:last-child,
  button:last-child {
    padding-right: 0;
  }
`

const NavSecondaryOptions = props => {
  return (
    <StyledOptions>
      <button type="button" className="Navbar__navItem Navbar__withArrow">
        <PublicIcon />
      </button>
      {/* <button type="button" className="Navbar__navItem Navbar__withArrow">
        Shipping countries
      </button> */}

      <Link href="/help">
        <a className="Navbar__navItem Navbar__withArrow">Help</a>
      </Link>
    </StyledOptions>
  )
}

NavSecondaryOptions.propTypes = {}

export default NavSecondaryOptions
