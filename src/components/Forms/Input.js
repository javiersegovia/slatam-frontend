import React, { useState, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import uuid from 'uuid/v4'
import Label from './Label'
import ErrorMessage from './ErrorMessage'

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

    &:focus,
    &:focus-within {
      ${({ theme }) => theme.mixins.forms.focusedField()};
    }

    ${props =>
      props.isFocused &&
      `
      ${props.theme.mixins.forms.focusedField()}
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

export const MemoInput = ({ memoDependencies = [], ...props }) => {
  const renderInput = useMemo(() => <Input {...props} />, [...memoDependencies])

  return renderInput
}

MemoInput.propTypes = {
  memoDependencies: PropTypes.array.isRequired,
}

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
  errors = null,
  handleFormErrors = null,
  ...inputProps
}) => {
  const randomID = useMemo(() => uuid(), [])
  const addProps = autoComplete ? { ...inputProps } : {}
  const [isFocused, setFocused] = useState(false)

  const handleChange = event => handleUpdate(event.target.value)

  const handleFocus = () => setFocused(true)
  const handleBlur = () => {
    if (handleFormErrors) {
      handleFormErrors()
    }

    setFocused(false)
  }

  return (
    <StyledInput rounded={rounded} {...parentProps} isFocused={isFocused}>
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
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {icon && iconPosition === 'end' && (
          <div className="inputIcon">{icon}</div>
        )}
      </div>
      {errors && !isFocused && <ErrorMessage>{errors}</ErrorMessage>}
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
