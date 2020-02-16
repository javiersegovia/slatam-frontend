import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.palette.primary.main};
  margin: 0 0 3px 8px;
  font-size: 0.875rem;
  display: inline-block;
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
