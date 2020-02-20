import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ErrorOutlineIcon from '@material-ui/icons/Error'

const StyledError = styled.label`
  color: ${({ theme }) => theme.palette.danger.main};
  font-size: 0.875rem;
  margin: 3px 0 0 0;
  display: inline-flex;
  align-items: center;

  .StyledError__icon {
    color: ${({ theme }) => theme.palette.danger.main};
    font-size: 1rem;
    margin-right: 5px;
    line-height: 1.5;
  }
`

const ErrorMessage = ({ children, ...props }) => {
  return (
    <StyledError {...props}>
      <ErrorOutlineIcon className="StyledError__icon" />
      <span>{children}</span>
    </StyledError>
  )
}

ErrorMessage.propTypes = {
  children: PropTypes.any.isRequired,
}

export default ErrorMessage
