import React, { useRef } from 'react'
import Link from 'next/link'
import { StyledSecondaryLinks } from './styled'
import CategoriesList from './Dropdowns/Categories'

const NavLinks = () => {
  const dropdownTogglerRef = useRef(null)

  console.log('rerender secondarylinks')

  return (
    <StyledSecondaryLinks>
      <li className="Navbar__listItem pl-0 Navbar__dropdownParent SecondaryLinks__categories">
        <button
          type="button"
          className="Navbar__listItemButton dropdownToggler Navbar__withArrow"
          ref={dropdownTogglerRef}
        >
          Categories
        </button>
        <CategoriesList dropdownTogglerRef={dropdownTogglerRef} />
      </li>

      <Link href="/explore">
        <li className="Navbar__listItem">
          <a className="Navbar__listItemButton">Best sellers</a>
        </li>
      </Link>

      <Link href="/request-quotation">
        <li className="Navbar__listItem">
          <a className="Navbar__listItemButton">Request for quotation</a>
        </li>
      </Link>
      <div className="Navbar__divider" />
      <Link href="/get-started">
        <li className="Navbar__listItem">
          <a className="Navbar__listItemButton Navbar__highlightItem">
            Get started now
          </a>
        </li>
      </Link>
    </StyledSecondaryLinks>
  )
}

export default NavLinks
