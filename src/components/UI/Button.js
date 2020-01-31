import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 12px 16px 13px;
  outline: none;
  border: none;
  background: ${props => props.theme.gradients.primary.main};
  box-shadow: ${props => props.theme.bShadows.button};
  color: white;
  cursor: pointer;
  letter-spacing: 0.8px;
  border-radius: 6px;
  font-weight: 500;

  ${props =>
    props.secondary &&
    `
    background: white;
    color: ${props.theme.palette.primary.light};
  `}

  ${props =>
    props.size === 'lg' &&
    `
    padding: 14px 22px 15px;
  `}

  ${props =>
    props.color === 'yellow' &&
    `
    background: ${props.theme.palette.secondary.light};
    color: ${props.theme.palette.darkYellow.main};
  `}


  ${props =>
    props.rounded &&
    `
    border-radius: 35px;
  `}
`

const Button = ({ children, ...otherProps }) => {
  return <StyledButton {...otherProps}>{children}</StyledButton>
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Button
