import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledStepper = styled.div`
  display: grid;
  grid-auto-flow: column;
`

const SignUpStepper = ({ handleStepper }) => {
  return (
    <StyledStepper className="StyledCard__Stepper">
      <button
        type="button"
        onClick={() => handleStepper(0)}
        className="Stepper__item"
      >
        Account
      </button>
      <button
        type="button"
        onClick={() => handleStepper(1)}
        className="Stepper__item"
      >
        Information
      </button>
      <button
        type="button"
        onClick={() => handleStepper(2)}
        className="Stepper__item"
      >
        Interest
      </button>
    </StyledStepper>
  )
}

SignUpStepper.propTypes = {
  handleStepper: PropTypes.func.isRequired,
}

export default SignUpStepper
