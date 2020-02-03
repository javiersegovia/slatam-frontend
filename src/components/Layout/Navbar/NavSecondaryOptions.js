import React, { useState } from 'react'
// import PropTypes from 'prop-types'
// import PublicIcon from '@material-ui/icons/Public'
import Popper from '@material-ui/core/Popper'
import Portal from '@material-ui/core/Portal'
import TransparentOverlay from '@components/UI/TransparentOverlay'
import HelpDropdown from './Dropdowns/Help'
import LanguagesDropdown from './Dropdowns/Languages'
import ShippingDropdown from './Dropdowns/ShippingCountries'
import { StyledSecondaryOptions } from './styled'

const NavSecondaryOptions = () => {
  const [openDropdowns, setOpenDropdowns] = useState({})
  const [anchorEl, setAnchorEl] = useState(null)
  const [language, setLanguage] = useState('EN')

  const handleMouseEnter = event => {
    const { name } = event.target
    setAnchorEl(event.currentTarget)
    if (!openDropdowns[name]) {
      setOpenDropdowns({
        [name]: true,
      })
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
    setOpenDropdowns({})
  }

  const DropdownComponent = () => (
    <>
      {openDropdowns && openDropdowns.language && (
        <LanguagesDropdown
          language={language}
          selectLanguage={setLanguage}
          closeDropdown={handleClose}
        />
      )}
      {openDropdowns && openDropdowns.help && <HelpDropdown />}
      {openDropdowns && openDropdowns.shipping && <ShippingDropdown />}
    </>
  )

  return (
    <div style={{ flex: 1, display: 'flex', position: 'relative' }}>
      <StyledSecondaryOptions onMouseLeave={handleClose}>
        <li className="Navbar__listItem" style={{ marginLeft: 'auto' }}>
          <button
            type="button"
            className={`Navbar__listItemButton dropdownToggler Navbar__withArrow ${
              openDropdowns.shipping ? 'opened' : ''
            }`}
            name="shipping"
            onMouseOver={handleMouseEnter}
            onFocus={handleMouseEnter}
          >
            Ship to...
          </button>
        </li>

        <li
          className="Navbar__listItem"
          style={{ marginLeft: 'auto', width: 50 }}
        >
          <button
            type="button"
            name="language"
            className={`Navbar__listItemButton dropdownToggler Navbar__withArrow ${
              openDropdowns.language ? 'opened' : ''
            }`}
            onMouseOver={handleMouseEnter}
            onFocus={handleMouseEnter}
          >
            {language}
          </button>
        </li>

        <li className="Navbar__listItem">
          <button
            type="button"
            name="help"
            className={`Navbar__listItemButton dropdownToggler Navbar__withArrow${
              openDropdowns.help ? ' opened' : ''
            }`}
            onMouseOver={handleMouseEnter}
            onFocus={handleMouseEnter}
          >
            Help
          </button>
        </li>
        {Object.entries(openDropdowns).length !== 0 && (
          <Portal>
            <TransparentOverlay onMouseEnter={handleClose} />
          </Portal>
        )}
        <Popper
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleClose}
          disablePortal
          keepMounted
          placement="bottom-end"
          modifiers={{
            computeStyle: {
              gpuAcceleration: false,
            },
          }}
        >
          <DropdownComponent />
        </Popper>
      </StyledSecondaryOptions>
    </div>
  )
}

NavSecondaryOptions.propTypes = {}

export default NavSecondaryOptions

// TODO: Popper dropdown should be encapsulated inside every component
// so we can match the dropdown arrow with the Li item arrow
