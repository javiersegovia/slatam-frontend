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
  display: inline-flex;
  justify-content: center;

  ${props =>
    props.secondary &&
    `
    background: white;
    color: ${props.theme.palette.primary.light};
  `}

  ${props =>
    props.outlined &&
    `
    background: white;
    color: ${props.theme.palette.primary.light};
    border: 2px solid ${props.theme.palette.primary.light};
  `}

  ${props =>
    props.size === 'lg' &&
    `
    padding: 16px 22px 17px;
    font-size: 1.125rem;
  `}

  ${props =>
    props.color === 'default' &&
    `
    background: ${props.theme.gradients.snow.main};
    color: ${props.theme.palette.black.main};
  `}


  ${props =>
    props.rounded &&
    `
    border-radius: 35px;
  `}
`

const Button = ({ children, ...otherProps }) => {
  return (
    <StyledButton as={otherProps.href ? 'a' : ''} {...otherProps}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Button
