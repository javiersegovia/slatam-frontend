import React from 'react'
import Link from 'next/link'
import StyledDropdownWrapper from './styled'

const HelpDropdown = () => {
  return (
    <StyledDropdownWrapper>
      <li className="HelpDropdown__listItem">
        <Link href="/dsad">
          <a className="HelpDropdown__listButton">For Buyers</a>
        </Link>
      </li>
      <li className="HelpDropdown__listItem">
        <Link href="/sign-in">
          <a className="HelpDropdown__listButton">For Suppliers</a>
        </Link>
      </li>
      <li className="HelpDropdown__listItem">
        <Link href="/">
          <a className="HelpDropdown__listButton">Submit a Dispute</a>
        </Link>
      </li>
      <li className="HelpDropdown__listItem">
        <Link href="/">
          <a className="HelpDropdown__listButton">Report IPR Infringement</a>
        </Link>
      </li>
      <li className="HelpDropdown__listItem">
        <Link href="/">
          <a className="HelpDropdown__listButton">Report Abuse</a>
        </Link>
      </li>
      <li className="HelpDropdown__listItem">
        <Link href="/">
          <a className="HelpDropdown__listButton">Contact us</a>
        </Link>
      </li>
    </StyledDropdownWrapper>
  )
}

export default HelpDropdown
