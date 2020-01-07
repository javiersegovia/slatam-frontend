import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Portal from '@material-ui/core/Portal'
import TransparentOverlay from '@components/UI/TransparentOverlay'
import { StyledSecondaryLinks } from './styled'
import CategoriesList from './Dropdowns/Categories'

const NavLinks = ({ isLoggedIn = false }) => {
  const [openDropdowns, setOpenDropdowns] = useState({})

  const handleMouseEnter = name => {
    setOpenDropdowns({
      ...openDropdowns,
      [name]: true,
    })
  }

  const handleMouseLeave = name => {
    setOpenDropdowns({})
  }

  const dropdownTogglerRef = useRef(null)

  return (
    <StyledSecondaryLinks>
      <li className="Navbar__listItem pl-0 Navbar__dropdownParent SecondaryLinks__categories">
        <div onMouseLeave={() => handleMouseLeave('categoriesDropdown')}>
          <button
            type="button"
            onFocus={() => handleMouseEnter('categoriesDropdown')}
            onMouseEnter={() => handleMouseEnter('categoriesDropdown')}
            className={`Navbar__listItemButton dropdownToggler Navbar__withArrow${
              openDropdowns.categoriesDropdown ? ' opened' : ''
            }`}
            ref={dropdownTogglerRef}
          >
            Categories
          </button>
          {openDropdowns.categoriesDropdown && (
            <CategoriesList dropdownTogglerRef={dropdownTogglerRef} />
          )}
        </div>
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
      {isLoggedIn ? (
        <Link href="/upgrade">
          <li className="Navbar__listItem">
            <a className="Navbar__listItemButton Navbar__highlightItem">
              Upgrade to Elite
            </a>
          </li>
        </Link>
      ) : (
        <Link href="/get-started">
          <li className="Navbar__listItem">
            <a className="Navbar__listItemButton Navbar__highlightItem">
              Get started now
            </a>
          </li>
        </Link>
      )}
      {Object.entries(openDropdowns).length !== 0 && (
        <Portal>
          <TransparentOverlay />
        </Portal>
      )}
    </StyledSecondaryLinks>
  )
}

export default NavLinks
