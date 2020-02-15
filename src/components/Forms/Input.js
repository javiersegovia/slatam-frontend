import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import uuid from 'uuid/v4'
import Label from './Label'

export const StyledInput = styled.div`
  .inputWrapper {
    width: 100%;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.palette.slategray.extralight};
    background: ${({ theme }) => theme.palette.snow.extralight};
    display: flex;
    align-items: stretch;
    height: 48px;
    background: #fff;

    ${props =>
      props.rounded &&
      `
    border-radius: 35px;
  `}
  }

  .StyledInput__input {
    width: 100%;
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    padding: 8px 16px;

    &.datepicker.no-input {
      cursor: pointer;
    }
  }

  .inputIcon {
    color: ${({ theme }) => theme.palette.slategray.light};
    display: flex;
    align-items: center;
    padding-right: 16px;
  }
`

const Input = ({
  label,
  rounded = false,
  parentProps = {},
  icon,
  iconPosition,
  value,
  handleUpdate,
  type,
  autoComplete,
  ...inputProps
}) => {
  const randomID = useMemo(() => uuid(), [])
  const addProps = autoComplete ? { ...inputProps } : {}

  const handleChange = event => {
    handleUpdate(event.target.value)
  }

  return (
    <StyledInput rounded={rounded} {...parentProps}>
      {label && <Label htmlFor={randomID}>{label}</Label>}
      <div className="inputWrapper">
        {((icon && iconPosition === null) || iconPosition === 'start') && (
          <div className="inputIcon">{icon}</div>
        )}
        <input
          {...addProps}
          type={type || 'text'}
          value={value}
          onChange={handleChange}
          id={randomID}
          autoComplete={autoComplete || randomID}
          className="StyledInput__input"
        />
        {icon && iconPosition === 'end' && (
          <div className="inputIcon">{icon}</div>
        )}
      </div>
    </StyledInput>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  rounded: PropTypes.bool,
  parentProps: PropTypes.object,
  icon: PropTypes.node,
  iconPosition: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  type: PropTypes.string,
  autoComplete: PropTypes.string,
}

export default Input
