import React, { useState } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import Popper from '@material-ui/core/Popper'
import Portal from '@material-ui/core/Portal'
import TransparentOverlay from '@components/UI/TransparentOverlay'
import AccountDropdown from './Dropdowns/Account'
import { StyledPrimaryLinks } from './styled'

const dropdownOptions = {
  account: ({ isLoggedIn }) => <AccountDropdown isLoggedIn={isLoggedIn} />,
}

const NotLoggedNav = ({
  anchorEl,
  openDropdown,
  handleClose,
  handleMouseEnter,
}) => {
  return (
    <>
      <Link href="/about">
        <li className="Navbar__listItem">
          <a className="Navbar__listItemButton">Why Slatam?</a>
        </li>
      </Link>
      <div className="Navbar__divider" />

      <li className="Navbar__listItem">
        <button
          type="button"
          name="account"
          className={cx(
            'Navbar__listItemButton',
            'Navbar__accountButton',
            'Navbar__withArrow',
            {
              opened: openDropdown === 'account',
            }
          )}
          onMouseOver={handleMouseEnter}
          onFocus={handleMouseEnter}
          style={{ paddingRight: 0 }}
        >
          Account
        </button>
      </li>
    </>
  )
}

const LoggedInNav = ({
  anchorEl,
  openDropdown,
  handleClose,
  handleMouseEnter,
}) => (
  <>
    <Link href="/explore">
      <li className="Navbar__listItem">
        <a className="Navbar__listItemButton">Explore</a>
      </li>
    </Link>
    <div className="Navbar__divider" />
    <li className="Navbar__listItem">
      <button type="button" className="Navbar__listItemButton">
        Notifications
      </button>
    </li>
    <Link href="/dashboard">
      <li className="Navbar__listItem">
        <a
          name="account"
          className={cx(
            'Navbar__listItemButton',
            'Navbar__accountButton',
            'Navbar__withArrow',
            {
              opened: openDropdown === 'account',
            }
          )}
          onMouseOver={handleMouseEnter}
          onFocus={handleMouseEnter}
        >
          Account
        </a>
      </li>
    </Link>
    <div className="Navbar__divider" />
    <Link href="/dashboard">
      <li className="Navbar__listItem">
        <a className="Navbar__listItemButton">Cart</a>
      </li>
    </Link>
  </>
)

const NavLinks = ({ isLoggedIn = false }) => {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMouseEnter = event => {
    const { name } = event.target
    setAnchorEl(event.currentTarget)
    if (!openDropdown) {
      setOpenDropdown(name)
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
    setOpenDropdown(null)
  }
  return (
    <StyledPrimaryLinks onMouseLeave={handleClose}>
      {isLoggedIn ? (
        <LoggedInNav
          anchorEl={anchorEl}
          openDropdown={openDropdown}
          handleClose={handleClose}
          handleMouseEnter={handleMouseEnter}
        />
      ) : (
        <NotLoggedNav
          anchorEl={anchorEl}
          openDropdown={openDropdown}
          handleClose={handleClose}
          handleMouseEnter={handleMouseEnter}
        />
      )}
      {openDropdown && (
        <Portal>
          <TransparentOverlay onMouseEnter={handleClose} />
        </Portal>
      )}
      <Popper
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        className="PrimaryLinks__popper"
        disablePortal
        keepMounted
        placement="bottom-end"
        modifiers={{
          computeStyle: {
            gpuAcceleration: false,
          },
        }}
      >
        {dropdownOptions[openDropdown] &&
          dropdownOptions[openDropdown]({ isLoggedIn })}
      </Popper>
    </StyledPrimaryLinks>
  )
}

export default NavLinks
