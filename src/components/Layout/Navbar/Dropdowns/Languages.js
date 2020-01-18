import React from 'react'
import PropTypes from 'prop-types'
import { FlagIcon } from 'react-flag-kit'
import StyledDropdownWrapper from './styled'

const USAFlag = () => <FlagIcon code="US" size={24} />
const ESPFlag = () => <FlagIcon code="ES" size={24} />

const LanguagesDropdown = ({ language, selectLanguage, closeDropdown }) => {
  const handleClick = lang => {
    selectLanguage(lang)
    closeDropdown()
  }

  return (
    <StyledDropdownWrapper as="div">
      <p className="LanguagesDropdown__description">
        Choose your preferred language
      </p>
      <ul className="LanguagesDropdown__list">
        <li className="LanguagesDropdown__listItem">
          <button
            type="button"
            onClick={() => handleClick('EN')}
            className={`LanguagesDropdown__listButton${
              language === 'EN' ? ' active' : ''
            }`}
          >
            <USAFlag /> <span>English</span>
          </button>
        </li>
        <li className="LanguagesDropdown__listItem">
          <button
            type="button"
            onClick={() => handleClick('ES')}
            className={`LanguagesDropdown__listButton${
              language === 'ES' ? ' active' : ''
            }`}
          >
            <ESPFlag /> <span>Español</span>
          </button>
        </li>
      </ul>
    </StyledDropdownWrapper>
  )
}

LanguagesDropdown.propTypes = {
  language: PropTypes.string.isRequired,
  selectLanguage: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
}

export default LanguagesDropdown
