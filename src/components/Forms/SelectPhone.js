import React, { useState, useEffect, useRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import { FixedSizeList as List } from 'react-window'
import { FlagIcon } from 'react-flag-kit'
import InputMask from 'react-input-mask'
import Popper from '@material-ui/core/Popper'
import LanguageIcon from '@material-ui/icons/Language'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import countries from '@data/countries.json'
import styled from 'styled-components'
import Label from './Label'
import ErrorMessage from './ErrorMessage'

const StyledSelectPhone = styled.div`
  position: relative;

  .inputWrapper {
    width: 100%;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.palette.slategray.extralight};
    background: ${({ theme }) => theme.palette.snow.extralight};
    display: flex;
    align-items: stretch;
    height: 48px;
    background: #fff;

    &:focus,
    &:focus-within {
      ${({ theme }) => theme.mixins.forms.focusedField()};
    }

    ${props =>
      props.rounded &&
      `
    border-radius: 35px;
  `}
  }

  .StyledSelectPhone__selectWrapper {
    display: flex;
    align-items: stretch;
    position: relative;

    ${props =>
      props.disabled &&
      `
      background: ${props.theme.palette.slategray.extralight};
    `};
  }

  .StyledSelectPhone__popper {
    width: 101%;
    z-index: ${({ theme }) => theme.zIndex.tooltip};
  }

  .StyledSelectPhone__phoneCode {
    padding-left: 8px;
    white-space: nowrap;
    display: flex;
    align-items: center;
  }

  .StyledSelectPhone__phoneCode,
  .StyledSelectPhone__input {
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.palette.black.main};
  }

  .StyledSelectPhone__input {
    width: 100%;
    padding: 8px 16px 8px 8px;
  }

  .inputIcon {
    color: ${({ theme }) => theme.palette.slategray.light};
    display: flex;
    align-items: center;
    padding-right: 16px;

    button {
      display: flex;
    }
  }

  .StyledSelectPhone__currentItem {
    padding: 8px 0 8px 16px;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    text-align: left;
    color: ${({ theme }) => theme.palette.black.light};

    .country {
      margin-right: 10px;
      max-width: 60px;
      display: flex;
      align-items: center;
    }

    ${props =>
      props.disabled &&
      `
      cursor: default;
    `};
  }

  .StyledSelectPhone__windowWrapper {
    width: 100% !important;
  }

  .StyledSelectPhone__dropdownWrapper {
    background: white;
    border-radius: 6px;
    overflow: hidden;
    max-width: 100%;
    box-shadow: ${({ theme }) => theme.bShadows.menuDropdown};
  }

  .StyledSelectPhone__dropdown {
    overflow: auto;
    overflow-x: hidden;
    max-height: 300px;
  }

  .StyledSelectPhone__listButton {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 15px;
    min-height: 45px;
    text-align: left;

    &:hover {
      background: ${({ theme }) => theme.palette.snow.light};
    }
  }
`

const RowItem = ({ value, description, name, handleChange, style = {} }) => (
  <li style={style}>
    <button
      type="button"
      onClick={handleChange}
      value={value}
      name={name}
      className="StyledSelectPhone__listButton"
    >
      {description || value}
    </button>
  </li>
)

RowItem.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  style: PropTypes.object,
}

const WindowList = ({ items, handleChange }) => (
  <List
    itemData={{ items, handleChange }}
    width={279}
    height={300}
    itemSize={45}
    itemCount={items.length}
    className="StyledSelectPhone__windowWrapper"
  >
    {({ data, index, style }) => {
      const { value, description = null, code } = data.items[index]
      return (
        <RowItem
          value={value}
          description={description}
          name={code}
          handleChange={data.handleChange}
          style={style}
          key={value + description}
        />
      )
    }}
  </List>
)

WindowList.propTypes = {
  items: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
}

const SelectPhone = ({
  rounded = false,
  parentProps = {},
  value,
  label,
  handleUpdate,
  disabled = false,
  errors = null,
  handleFormErrors = null,
}) => {
  const listOfCountryCodes = useMemo(
    () =>
      countries
        .map(country => ({
          value: country.phoneCode,
          description: `${country.name} (${country.phoneCode})`,
          code: country.code2,
        }))
        .filter(x => x.value),
    [countries]
  )

  const [parsedCode = '', parsedValue = ''] = value.split(' ')

  const selectedCountry = useMemo(
    () => listOfCountryCodes.find(country => country.value === parsedCode),
    [listOfCountryCodes, parsedCode]
  )

  const [phoneCode, setPhoneCode] = useState(parsedCode)
  const [phoneValue, setPhoneValue] = useState(parsedValue)
  const [countryCode, setCountryCode] = useState(
    (selectedCountry && selectedCountry.code) || ''
  )

  const [anchorEl, setAnchorEl] = useState(null)
  const [isFocused, setFocused] = useState(false)

  const randomID = useMemo(() => uuid(), [])
  const myRef = useRef(null)

  const handleFocus = () => setFocused(true)
  const handleBlur = () => {
    if (handleFormErrors) {
      handleFormErrors()
    }

    setFocused(false)
  }

  const handleOpenDropdown = () => {
    if (disabled) return
    if (!anchorEl) {
      setAnchorEl(myRef.current)
      setFocused(true)
    }
  }

  const handleInput = event => {
    const newValue = event.target.value
    setPhoneValue(newValue)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    const phoneNumber = `${phoneCode} ${phoneValue.replace(/\D/g, '')}`
    handleUpdate(phoneNumber)
  }, [phoneCode, phoneValue])

  const handleCountry = event => {
    setPhoneCode(event.target.value)
    setCountryCode(event.target.name)
    handleClose()
  }

  return (
    <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
      <StyledSelectPhone rounded={rounded} {...parentProps}>
        {label && <Label htmlFor={randomID}>{label}</Label>}
        <div className="inputWrapper">
          <div className="StyledSelectPhone__selectWrapper" ref={myRef}>
            <button
              className="StyledSelectPhone__currentItem"
              type="button"
              onClick={handleOpenDropdown}
              onFocus={handleOpenDropdown}
            >
              {countryCode ? <FlagIcon code={countryCode} /> : <LanguageIcon />}
            </button>
          </div>
          {phoneCode && (
            <div className="StyledSelectPhone__phoneCode">{phoneCode}</div>
          )}
          <InputMask
            value={phoneValue}
            id={randomID}
            type="tel"
            onChange={handleInput}
            mask="(999) 999-9999"
            className="StyledSelectPhone__input"
            placeholder="e.g. (412) 456-7891"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <Popper
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleClose}
          disablePortal
          placement="bottom-start"
          className="StyledSelectPhone__popper"
          modifiers={{
            computeStyle: {
              gpuAcceleration: false,
            },
          }}
        >
          <div className="StyledSelectPhone__dropdownWrapper">
            <div className="StyledSelectPhone__dropdown">
              <WindowList
                items={listOfCountryCodes}
                handleChange={handleCountry}
              />
            </div>
          </div>
        </Popper>
        {errors && !isFocused && (
          <ErrorMessage className="error">{errors}</ErrorMessage>
        )}
      </StyledSelectPhone>
    </ClickAwayListener>
  )
}

SelectPhone.propTypes = {
  rounded: PropTypes.bool,
  parentProps: PropTypes.object,
  // value: PropTypes.string,
  label: PropTypes.string,
  handleUpdate: PropTypes.func,
  disabled: PropTypes.bool,
}

export default SelectPhone
