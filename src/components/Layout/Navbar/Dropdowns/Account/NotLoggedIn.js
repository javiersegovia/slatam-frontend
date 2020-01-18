import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import StyledDropdownWrapper from '../styled'

const NotLoggedInDropdown = props => {
  return (
    <StyledDropdownWrapper>
      <li className="HelpDropdown__listItem">
        <Link href="/sign-in">
          <a className="HelpDropdown__listButton">Sign in</a>
        </Link>
      </li>
      <li className="HelpDropdown__listItem">
        <Link href="/sign-up">
          <a className="HelpDropdown__listButton">Create an account</a>
        </Link>
      </li>
    </StyledDropdownWrapper>
  )
}

NotLoggedInDropdown.propTypes = {}

export default NotLoggedInDropdown
