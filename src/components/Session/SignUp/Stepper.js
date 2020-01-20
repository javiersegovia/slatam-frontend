import React from 'react'
import PropTypes from 'prop-types'

const Stepper = props => {
  return (
    <div className="StyledCard__Stepper">
      <div className="Stepper__item">Account</div>
      <div className="Stepper__item">Information</div>
      <div className="Stepper__item">Company</div>
      <div className="Stepper__item">Completed</div>
    </div>
  )
}

Stepper.propTypes = {}

export default Stepper
