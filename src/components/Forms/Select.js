import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import MuiSelect from '@material-ui/core/Select'
import InputBase from '@material-ui/core/InputBase'
import MenuItem from '@material-ui/core/MenuItem'
import styled from 'styled-components'
import { FixedSizeList as List } from 'react-window'
import Popper from '@material-ui/core/Popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
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
  }

  .StyledSelect__currentValue {
    padding: 8px 0 8px 16px;
  }

  .StyledSelect__input {
    padding: 8px 16px;
    width: 100%;
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
  }

  .StyledSelect__currentValueTag {
    background: ${({ theme }) => theme.palette.primary.main};
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
    width: 100%;
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
  ...inputProps
}) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const myRef = useRef(null)

  const handleFocus = event => {
    const { name } = event.target
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChange = event => {
    onChange(event)
    handleClose()
  }

  return (
    <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
      <StyledSelect>
        {label && <Label htmlFor={id}>{label}</Label>}
        <div className="StyledSelect__selectWrapper">
          {value && (
            <div className="StyledSelect__currentValue">
              <button
                type="button"
                onClick={handleFocus}
                className="StyledSelect__currentValueTag"
              >
                {displayValue || value}
              </button>
            </div>
          )}
          <input
            {...inputProps}
            type="text"
            className="StyledSelect__input"
            onFocus={handleFocus}
            onClick={handleFocus}
            autoComplete="new-password"
            ref={myRef}
          />
        </div>
        <Popper
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleClose}
          disablePortal
          placement="bottom-end"
          className="StyledSelect__popper"
          modifiers={{
            computeStyle: {
              gpuAcceleration: false,
            },
          }}
        >
          <div className="StyledSelect__dropdownWrapper">
            <div className="StyledSelect__dropdown">
              {selectItems.length > 50 ? (
                <WindowList items={selectItems} handleChange={handleChange} />
              ) : (
                <DefaultList items={selectItems} handleChange={handleChange} />
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
