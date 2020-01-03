import React from 'react'
import Link from 'next/link'
import { StyledDropdownWrapper } from './styled'

const LanguagesDropdown = () => {
  return (
    <StyledDropdownWrapper>
      <li className="LanguagesDropdown__listItem">
        <Link href="/dsad">
          <a className="LanguagesDropdown__listButton">menuitem</a>
        </Link>
      </li>
      <li className="LanguagesDropdown__listItem">
        <Link href="/sign-in">
          <a className="LanguagesDropdown__listButton">2menu</a>
        </Link>
      </li>
      <li className="LanguagesDropdown__listItem">
        <Link href="/">
          <a className="LanguagesDropdown__listButton">4menu</a>
        </Link>
      </li>
      <li className="LanguagesDropdown__listItem">
        <Link href="/">
          <a className="LanguagesDropdown__listButton">5</a>
        </Link>
      </li>
      <li className="LanguagesDropdown__listItem">
        <Link href="/">
          <a className="LanguagesDropdown__listButton">mrenur</a>
        </Link>
      </li>
    </StyledDropdownWrapper>
  )
}

export default LanguagesDropdown
