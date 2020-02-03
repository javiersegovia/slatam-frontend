import React, { useState, useRef, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import MuiSelect from '@material-ui/core/Select'
import InputBase from '@material-ui/core/InputBase'
import MenuItem from '@material-ui/core/MenuItem'
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

  .StyledSelect__currentValue {
    padding: 8px 16px;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    & > div {
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

  .StyledSelect__currentValue {
    display: flex;
    align-items: center;

    .country {
      margin-right: 10px;
    }
  }

  .StyledSelect__listButton {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
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
  }
`

const RowItem = ({ value, description, handleChange, style = {} }) => (
  <li key={value + description} style={style}>
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
        />
      )
    }}
  </List>
)

const DefaultList = ({ items, handleChange }) =>
  items.map(({ value, description }) => (
    <RowItem
      value={value}
      description={description}
      handleChange={handleChange}
    />
  ))

const Select = ({
  id,
  value,
  displayValue,
  onChange,
  selectItems,
  label,
  disabled = false,
  hasFilter = false,
  ...inputProps
}) => {
  const [searchValue, setSearchValue] = useState('')
  const [anchorEl, setAnchorEl] = useState(null)
  const [filteredItems, setFilteredItems] = useState(selectItems)

  const myRef = useRef(null)

  const handleFocus = event => {
    if (disabled) return
    setAnchorEl(myRef.current)
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
  }

  const handleReset = () => {
    onChange(false)
  }

  const currentValue = useMemo(
    () =>
      selectItems.find(item => {
        return item.value === value
      }),
    [value]
  )

  useEffect(() => {
    if (currentValue && hasFilter) setSearchValue(currentValue.description)
  }, [currentValue])

  useEffect(() => {
    handleReset()
    setFilteredItems(selectItems)
  }, [selectItems])

  useEffect(() => {
    const results = selectItems.filter(item =>
      item.description.toLowerCase().includes(searchValue.toLowerCase())
    )

    setFilteredItems(results)
  }, [searchValue])

  const randomID = uuid()

  return (
    <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
      <StyledSelect disabled={disabled}>
        {label && <Label htmlFor={randomID}>{label}</Label>}

        <div className="StyledSelect__selectWrapper" ref={myRef}>
          <button
            className="StyledSelect__currentValue"
            type="button"
            onClick={handleFocus}
          >
            {displayValue && displayValue}
            {!hasFilter && currentValue && currentValue.description}
          </button>

          {hasFilter && (
            <input
              // {...inputProps}
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

Select.propTypes = {}

export default Select
