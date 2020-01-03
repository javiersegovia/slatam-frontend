import React from 'react'
import Link from 'next/link'
import { StyledDropdownWrapper } from './styled'

const HelpDropdown = () => {
  return (
    <StyledDropdownWrapper>
      <li className="LanguagesDropdown__listItem">
        <Link href="/dsad">
          <a className="LanguagesDropdown__listButton">For Buyers</a>
        </Link>
      </li>
      <li className="LanguagesDropdown__listItem">
        <Link href="/sign-in">
          <a className="LanguagesDropdown__listButton">For Suppliers</a>
        </Link>
      </li>
      <li className="LanguagesDropdown__listItem">
        <Link href="/">
          <a className="LanguagesDropdown__listButton">Submit a Dispute</a>
        </Link>
      </li>
      <li className="LanguagesDropdown__listItem">
        <Link href="/">
          <a className="LanguagesDropdown__listButton">
            Report IPR Infringement
          </a>
        </Link>
      </li>
      <li className="LanguagesDropdown__listItem">
        <Link href="/">
          <a className="LanguagesDropdown__listButton">Report Abuse</a>
        </Link>
      </li>{' '}
      <li className="LanguagesDropdown__listItem">
        <Link href="/">
          <a className="LanguagesDropdown__listButton">Contact us</a>
        </Link>
      </li>
    </StyledDropdownWrapper>
  )
}

export default HelpDropdown
