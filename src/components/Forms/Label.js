import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.palette.primary.main};
  padding: 0 8px 3px 8px;
  font-size: 0.875rem;
  display: inline-block;
  width: 100%;

  .forgotPassword {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      font-size: 0.8125rem;
      font-weight: 500;
    }
  }
`

const Label = ({ htmlFor, children, ...props }) => {
  return (
    <StyledLabel htmlFor={htmlFor} {...props}>
      {children}
    </StyledLabel>
  )
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

export default Label
