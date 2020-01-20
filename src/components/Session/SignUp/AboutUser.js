import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Button from '@components/UI/Button'
import Input from '@components/Forms/Input'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { StyledWrapper, StyledCard } from '../styled'

const AboutUser = ({ formValues, handleChange, togglePassword, onSubmit }) => {
  return (
    <StyledWrapper>
      <h2 className="StyledCard__title">About you</h2>
      <div className="StyledCard__inner">
        <div className="StyledCard__gridContainer">
          <Input
            value={formValues['firstName']}
            onChange={handleChange('firstName')}
            parentProps={{ className: 'StyledCard__flexItem' }}
            type="text"
            name="firstName"
            id="signUp__firstName"
            label="First Name"
          />
          <Input
            value={formValues['lastName']}
            onChange={handleChange('lastName')}
            parentProps={{ className: 'StyledCard__flexItem' }}
            type="text"
            name="lastName"
            id="signUp__lastName"
            label="Last Name"
          />
        </div>
        <div className="StyledCard__gridContainer">
          <Input
            value={formValues['country']}
            onChange={handleChange('country')}
            parentProps={{ className: 'StyledCard__flexItem' }}
            type="text"
            name="country"
            id="signUp__country"
            label="Country"
          />
          <Input
            value={formValues['city']}
            onChange={handleChange('city')}
            parentProps={{ className: 'StyledCard__flexItem' }}
            type="text"
            name="city"
            id="signUp__city"
            label="City"
          />
        </div>
        <Input
          value={formValues['phone']}
          onChange={handleChange('phone')}
          type="phone"
          name="phone"
          id="signUp__email"
          label="Phone"
        />
      </div>
      <Button
        type="submit"
        className="StyledCard__submitButton"
        onClick={onSubmit}
      >
        Continue
      </Button>
      <p className="StyledCard__redirect">
        Already have an account?{' '}
        <Link href="/">
          <a>Sign in</a>
        </Link>
      </p>
    </StyledWrapper>
  )
}

AboutUser.propTypes = {
  formValues: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  togglePassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default AboutUser
