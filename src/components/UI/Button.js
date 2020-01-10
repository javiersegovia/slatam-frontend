import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 12px 16px;
  outline: none;
  border: none;
  background: linear-gradient(67deg, #174592, #0a5fbb);
  box-shadow: ${props => props.theme.bShadows.button};
  color: white;
  font-weight: 500;
  border-radius: 35px;
  cursor: pointer;
  letter-spacing: 0.8px;
  border-radius: 6px;

  ${props =>
    props.secondary &&
    `
    background: white;
    color: ${props.theme.palette.primary.light};
  `}

  ${props =>
    props.size === 'lg' &&
    `
    font-size: 1.125rem;
    padding: 14px 22px;
    /* text-transform: uppercase; */
  `}
`

const Button = ({ children, ...otherProps }) => {
  return <StyledButton {...otherProps}>{children}</StyledButton>
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Button