import React, { useState, useRef, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FixedSizeList as List } from 'react-window'
import Popper from '@material-ui/core/Popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import uuid from 'uuid/v4'
import Label from './Label'

const StyledSelect = styled.div`
  position: relative;

  .StyledSelect__selectWrapper {
    width: 100%;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.palette.slategray.extralight};
    background: ${({ theme }) => theme.palette.snow.extralight};
    display: flex;
    align-items: stretch;
    height: 48px;
    background: #fff;
    position: relative;

    ${props =>
      props.disabled &&
      `
      background: ${props.theme.palette.slategray.extralight};
    `};
  }

  .StyledSelect__currentItem {
    padding: 8px 16px;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    text-align: left;

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

  .StyledSelect__placeholder {
    width: 100%;
    font-style: italic;
    text-align: left;
    opacity: 0.8;
  }

  .StyledSelect__input {
    padding: 8px 16px 8px 0;
    width: 100%;
    margin-left: 16px;
    z-index: 2;
    font-size: 1rem;

    &.spaceAtLeft {
      margin-left: 60px;
    }
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
      {description}
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
      const { value, description } = data.items[index]
      return (
        <RowItem
          value={value}
          description={description}
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

const DefaultList = ({ items, handleChange }) =>
  items.map(({ value, description }) => (
    <RowItem
      value={value}
      description={description}
      handleChange={handleChange}
      key={value + description}
    />
  ))

DefaultList.propTypes = {
  items: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
}

const Select = ({
  value,
  displayValue,
  onChange,
  selectItems,
  label,
  disabled = false,
  hasFilter = false,
  displayRequirement = true,
  placeholder = null,
  disabledPlaceholder = null,
  disabledWithDisplayRequirementMet = null,
}) => {
  const [searchValue, setSearchValue] = useState('')
  const [anchorEl, setAnchorEl] = useState(null)
  const [filteredItems, setFilteredItems] = useState(selectItems)

  const myRef = useRef(null)

  const handleFocus = () => {
    if (disabled) return
    if (!anchorEl) setAnchorEl(myRef.current)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChange = event => {
    onChange(event)
    handleClose()
  }

  const handleInputChange = event => {
    const { value: inputVal } = event.target
    setSearchValue(inputVal)
    if (!anchorEl) handleFocus()
  }

  const handleReset = () => {
    onChange(false)
  }

  const randomID = useMemo(() => uuid(), [])

  const currentItem = useMemo(
    () => selectItems.find(item => item.value === value),
    [value]
  )

  useEffect(() => {
    if (currentItem && hasFilter) setSearchValue(currentItem.description)
  }, [currentItem])

  useEffect(() => {
    handleReset()
    setFilteredItems(selectItems)
  }, [selectItems])

  useEffect(() => {
    const results = selectItems.filter(item =>
      item.description
        .trim()
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    )

    setFilteredItems(results)
  }, [searchValue])

  return (
    <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
      <StyledSelect disabled={disabled}>
        {label && <Label htmlFor={randomID}>{label}</Label>}
        <div className="StyledSelect__selectWrapper" ref={myRef}>
          <button
            className="StyledSelect__currentItem"
            type="button"
            onClick={handleFocus}
            onFocus={handleFocus}
          >
            {displayValue && displayValue}
            {!hasFilter && currentItem && currentItem.description}
            {!hasFilter && !currentItem && (
              <div className="StyledSelect__placeholder">
                {(disabled && (
                  <span className="disabled">
                    {(!displayRequirement && disabledPlaceholder) ||
                      (displayRequirement && disabledWithDisplayRequirementMet)}
                  </span>
                )) ||
                  placeholder}
              </div>
            )}
          </button>

          {hasFilter && (
            <input
              type="text"
              className={`StyledSelect__input ${
                displayValue ? 'spaceAtLeft' : ''
              }`}
              value={searchValue}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onClick={handleFocus}
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
          )}
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
      </StyledSelect>
    </ClickAwayListener>
  )
}

Select.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  displayValue: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onChange: PropTypes.func.isRequired,
  selectItems: PropTypes.array.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  hasFilter: PropTypes.bool,
}

export default Select
