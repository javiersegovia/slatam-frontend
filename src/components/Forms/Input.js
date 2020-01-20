import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const StyledInput = styled.div`
  label {
    font-weight: 500;
    color: ${({ theme }) => theme.palette.primary.main};
    margin-left: 10px;
  }

  .inputWrapper {
    width: 100%;
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.palette.slategray.extralight};
    background: ${({ theme }) => theme.palette.snow.extralight};
    display: flex;
    align-items: stretch;
    height: 48px;
    padding: 8px 16px;

    ${props =>
      props.rounded &&
      `
    border-radius: 35px;
  `}
  }

  input {
    width: 100%;
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    padding: 0;
  }

  .inputIcon {
    color: ${({ theme }) => theme.palette.slategray.light};
    display: flex;
    align-items: center;
  }
`

const Input = ({
  id,
  label,
  rounded = false,
  parentProps = {},
  icon,
  iconPosition,
  ...inputProps
}) => {
  return (
    <StyledInput rounded={rounded} {...parentProps}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className="inputWrapper">
        {((icon && iconPosition === null) || iconPosition === 'start') && (
          <div className="inputIcon">{icon}</div>
        )}
        <input type="text" id={id} {...inputProps} />
        {icon && iconPosition === 'end' && (
          <div className="inputIcon">{icon}</div>
        )}
      </div>
    </StyledInput>
  )
}

Input.propTypes = {}

export default Input
