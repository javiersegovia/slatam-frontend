import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import PublicIcon from '@material-ui/icons/Public'
import Popper from '@material-ui/core/Popper'
import Portal from '@material-ui/core/Portal'
import TransparentOverlay from '@components/UI/TransparentOverlay'
import HelpDropdown from './Dropdowns/Help'
import LanguagesDropdown from './Dropdowns/Languages'
import { StyledSecondaryOptions } from './styled'

const NavSecondaryOptions = props => {
  const [openDropdowns, setOpenDropdowns] = useState({})
  const helpDropdownRef = useRef(null)
  const languageDropdownRef = useRef(null)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleMouseEnter = (event, name) => {
    setAnchorEl(event.currentTarget)
    setOpenDropdowns({
      [name]: true,
    })
  }

  const handleClose = () => {
    setAnchorEl(null)
    setOpenDropdowns({})
  }

  const DropdownComponent = () => (
    <>
      {openDropdowns && openDropdowns.language && <LanguagesDropdown />}
      {openDropdowns && openDropdowns.help && <HelpDropdown />}
    </>
  )

  return (
    <div style={{ flex: 1, display: 'flex', position: 'relative' }}>
      <StyledSecondaryOptions onMouseLeave={handleClose}>
        <li className="Navbar__listItem" style={{ marginLeft: 'auto' }}>
          <button
            type="button"
            className={`Navbar__listItemButton dropdownToggler Navbar__withArrow ${
              openDropdowns.language ? ' opened' : ''
            }`}
            onMouseOver={e => handleMouseEnter(e, 'language')}
            onFocus={e => handleMouseEnter(e, 'language')}
            ref={languageDropdownRef}
          >
            <PublicIcon />
          </button>
        </li>

        <li className="Navbar__listItem">
          <button
            type="button"
            className={`Navbar__listItemButton dropdownToggler Navbar__withArrow${
              openDropdowns.help ? ' opened' : ''
            }`}
            onMouseOver={e => handleMouseEnter(e, 'help')}
            onFocus={e => handleMouseEnter(e, 'help')}
            ref={helpDropdownRef}
          >
            Help
          </button>
        </li>
        {Object.entries(openDropdowns).length !== 0 && (
          <Portal>
            <TransparentOverlay />
          </Portal>
        )}
        <Popper
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleClose}
          disablePortal
          keepMounted
          placement="bottom-end"
        >
          <DropdownComponent />
        </Popper>
      </StyledSecondaryOptions>
    </div>
  )
}

NavSecondaryOptions.propTypes = {}

export default NavSecondaryOptions
