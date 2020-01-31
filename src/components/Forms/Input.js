import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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
    padding: 8px 16px;
  }

  .inputIcon {
    color: ${({ theme }) => theme.palette.slategray.light};
    display: flex;
    align-items: center;
    padding-right: 16px;
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
      {label && <Label htmlFor={id}>{label}</Label>}
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

Input.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string,
  rounded: PropTypes.bool,
  parentProps: PropTypes.object,
  icon: PropTypes.node,
  iconPosition: PropTypes.string,
}

export default Input
