import React, { useState, useRef, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FixedSizeList as List } from 'react-window'
import Popper from '@material-ui/core/Popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import ClearIcon from '@material-ui/icons/Clear'
import uuid from 'uuid/v4'
import Label from './Label'
import ErrorMessage from './ErrorMessage'

const StyledSelect = styled.div`
  position: relative;

  .StyledSelect__selectWrapper {
    width: 100%;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.palette.slategray.extralight};
    background: ${({ theme }) => theme.palette.snow.extralight};
    display: flex;
    align-items: stretch;
    min-height: 48px;
    background: #fff;
    position: relative;
    cursor: pointer;
    outline: none;

    .StyledSelect__selectArrow {
      display: flex;
      align-items: center;
      width: 20px;
      margin-left: auto;

      &:after {
        content: '';
        border-style: solid;
        border-width: 0 1.5px 1.5px 0;
        border-color: ${({ theme }) => theme.palette.primary.main};
        display: inline-block;
        margin-bottom: 0;
        padding: 2.5px;
        transform: rotate(45deg);
        transition: all 0.15s ease;

        ${props =>
          props.isFocused &&
          `
        transform: rotate(-135deg);
        margin-bottom: -3px;
        `}

        ${props =>
          props.disabled &&
          `
          border-color: ${props.theme.palette.black.light};
        `}
      }
    }

    &:focus,
    &:focus-within {
      ${({ theme }) => theme.mixins.forms.focusedField()};
    }

    ${props =>
      props.isMultiple &&
      `
      flex-wrap: wrap;
      padding: 3px 11px;
    `};

    ${props =>
      props.disabled &&
      `
      background: ${props.theme.palette.slategray.disabled};
      cursor: default;
    `};
  }

  .country {
    margin-left: 16px;
    max-width: 60px;
    display: flex;
    align-items: center;
    z-index: 1;
  }

  .StyledSelect__currentItem {
    z-index: 1;
    text-align: left;
    padding: 8px 16px;
    display: flex;
    align-items: center;
  }

  .StyledSelect__currentItemChip {
    background: ${({ theme }) => theme.palette.slategray.chip};
    color: ${({ theme }) => theme.palette.slategray.dark};
    border-radius: 6px;
    padding: 4px 6px;
    margin: 5px;
    display: flex;
    align-items: center;
    font-size: 0.875rem;

    .clearIcon {
      font-size: 1.125rem;
      margin-left: 6px;
      color: ${({ theme }) => theme.palette.slategray.dark};
      cursor: pointer;
    }
  }

  .StyledSelect__placeholder {
    width: 100%;
    font-style: italic;
    text-align: left;
    opacity: 0.8;
  }

  .StyledSelect__input {
    padding: 8px 16px 8px 0;
    flex: 1;
    margin-left: 16px;
    z-index: 2;
    font-size: 1rem;

    ${props =>
      props.isMultiple &&
      `
      border-bottom: 1px solid ${props.theme.palette.slategray.light};
      padding: 8px 16px 5px 0;
      margin: 0 5px 5px;
      width: auto; 
      flex: 1;
    `};
  }

  .StyledSelect__dropdownWrapper {
    background: white;
    border-radius: 6px;
    overflow: hidden;
    max-width: 100%;
    box-shadow: ${({ theme }) => theme.bShadows.menuDropdown};
  }

  .StyledSelect__windowWrapper {
    width: 100% !important;
  }

  .StyledSelect__dropdown {
    overflow: auto;
    overflow-x: hidden;
    max-height: 300px;
  }

  .StyledSelect__listButton {
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

  .StyledSelect__preffix {
    background: ${({ theme }) => theme.palette.slategray.extralight};
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 12px;
  }

  .StyledSelect__popper {
    width: 101%;
    z-index: ${({ theme }) => theme.zIndex.tooltip};
  }
`

const RowItem = ({ value, description, handleChange, style = {} }) => (
  <li style={style}>
    <button
      type="button"
      onClick={handleChange}
      value={value}
      className="StyledSelect__listButton"
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
    className="StyledSelect__windowWrapper"
  >
    {({ data, index, style }) => {
      const item = data.items[index]
      return (
        <RowItem
          value={item.value || item}
          description={item.description || ''}
          handleChange={handleChange}
          key={item.value || item}
          style={style}
        />
      )
    }}
  </List>
)

WindowList.propTypes = {
  items: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
}

const DefaultList = ({ items, handleChange }) =>
  items.map(item => (
    <RowItem
      value={item.value || item}
      description={item.description || ''}
      handleChange={handleChange}
      key={item.value || item}
    />
  ))

DefaultList.propTypes = {
  items: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
}

const Select = ({
  value,
  displayValue,
  handleUpdate,
  selectItems,
  label,
  disabled = false,
  hasFilter = false,
  isMultiple = false,
  maxMultiple = false,
  displayRequirement = true,
  placeholder = null,
  disabledPlaceholder = null,
  disabledWithDisplayRequirementMet = null,
  errors = null,
  handleFormErrors = null,
}) => {
  const [searchValue, setSearchValue] = useState('')
  const [filteredItems, setFilteredItems] = useState(selectItems)
  const [anchorEl, setAnchorEl] = useState(null)
  const [isFocused, setFocused] = useState(false)

  const myRef = useRef(null)

  const handleBlur = () => {
    if (handleFormErrors) {
      handleFormErrors()
    }

    setFocused(false)
  }

  const openDropdown = () => {
    if (disabled) return
    if (!anchorEl) {
      setAnchorEl(myRef.current)
      setFocused(true)
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
    setFocused(false)
  }

  const handleChange = event => {
    if (isMultiple) {
      let indexOfItem = -1

      if (value && Array.isArray(value) && value.length > 0) {
        indexOfItem = value.findIndex(val => val === event.target.value)
      }

      if (indexOfItem === -1) {
        const newValue = [...value, event.target.value]
        handleUpdate(newValue)
      }
    } else {
      handleUpdate(event.target.value)
    }
    handleClose()
  }

  const handleInputChange = event => {
    setSearchValue(event.target.value)
    if (!anchorEl) openDropdown()
  }

  const handleClearItem = item => {
    handleUpdate(value.filter(val => val !== item))
  }

  const randomID = useMemo(() => uuid(), [])

  useEffect(() => {
    setFilteredItems(selectItems)
  }, [selectItems])

  const currentItem = useMemo(() => {
    if (!value) return null
    if (isMultiple) {
      const currentValues = Array.isArray(value) ? value : [value]
      const newCurrent = currentValues.map(valueItem =>
        selectItems.find(item => {
          if (item.value) return item.value === valueItem
          return item === valueItem
        })
      )
      return newCurrent
    }

    return selectItems.find(item => {
      if (item.value) return item.value === value
      return item === value
    })
  }, [value, selectItems])

  useEffect(() => {
    if (currentItem && hasFilter) {
      if (isMultiple) {
        setSearchValue('')
      } else {
        setSearchValue(
          currentItem.description || currentItem.value || currentItem
        )
      }
    }
  }, [currentItem])

  useEffect(() => {
    if (hasFilter) {
      const results = selectItems.filter(item => {
        const filterValue = item.description || item.value || item

        return filterValue
          .trim()
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      })

      setFilteredItems(results)
    }
  }, [searchValue])

  const renderDisplayWithoutFilter = () => {
    if (currentItem) {
      return (
        <div className="StyledSelect__currentItem">
          {currentItem.description || currentItem.value || currentItem}
        </div>
      )
    }

    return (
      <div className="StyledSelect__placeholder StyledSelect__currentItem">
        {(disabled && (
          <span className="disabled">
            {(!displayRequirement && disabledPlaceholder) ||
              (displayRequirement && disabledWithDisplayRequirementMet)}
          </span>
        )) ||
          placeholder}
      </div>
    )
  }

  const renderMultipleItems = () => {
    if (isMultiple) {
      return (
        (currentItem &&
          currentItem.length > 0 &&
          currentItem.map(item => (
            <div className="StyledSelect__currentItemChip">
              <span>{item.description || item.value || item}</span>
              <ClearIcon
                className="clearIcon"
                name={item.value || item}
                onClick={() => handleClearItem(item.value || item)}
              />
            </div>
          ))) ||
        null
      )
    }
  }

  return (
    <ClickAwayListener
      onClickAway={() => {
        setAnchorEl(null)
        if (anchorEl || errors || isFocused) handleBlur()
      }}
    >
      <StyledSelect
        disabled={disabled}
        isMultiple={isMultiple}
        isFocused={isFocused}
      >
        {label && <Label htmlFor={randomID}>{label}</Label>}
        <div
          className="StyledSelect__selectWrapper"
          ref={myRef}
          role="textbox"
          onClick={openDropdown}
          onKeyDown={openDropdown}
          tabIndex={0}
        >
          {(displayValue || !hasFilter) && (
            <>
              {displayValue && displayValue}
              {!hasFilter &&
                (isMultiple
                  ? renderMultipleItems()
                  : renderDisplayWithoutFilter())}
            </>
          )}

          {hasFilter && (
            <>
              {isMultiple && renderMultipleItems()}
              <input
                type="text"
                className="StyledSelect__input"
                value={searchValue}
                onChange={handleInputChange}
                onFocus={openDropdown}
                onClick={openDropdown}
                id={randomID}
                autoComplete="new-password"
                placeholder={
                  (disabled &&
                    ((!displayRequirement && disabledPlaceholder) ||
                      (displayRequirement &&
                        disabledWithDisplayRequirementMet))) ||
                  placeholder
                }
              />
            </>
          )}
          <div className="StyledSelect__selectArrow" />
        </div>
        <Popper
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleClose}
          disablePortal
          placement="bottom-start"
          className="StyledSelect__popper"
          modifiers={{
            computeStyle: {
              gpuAcceleration: false,
            },
          }}
        >
          <div className="StyledSelect__dropdownWrapper">
            <div className="StyledSelect__dropdown">
              {filteredItems.length > 50 ? (
                <WindowList items={filteredItems} handleChange={handleChange} />
              ) : (
                <DefaultList
                  items={filteredItems}
                  handleChange={handleChange}
                />
              )}
            </div>
          </div>
        </Popper>
        {errors && !isFocused && (
          <ErrorMessage className="error">{errors}</ErrorMessage>
        )}
      </StyledSelect>
    </ClickAwayListener>
  )
}

Select.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  displayValue: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  handleUpdate: PropTypes.func.isRequired,
  selectItems: PropTypes.array.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  hasFilter: PropTypes.bool,
}

export default Select
