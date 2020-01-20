import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Button from '@components/UI/Button'
import Input from '@components/Forms/Input'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import LogoSVG from '@public/images/slatam-logo.svg'
import { StyledWrapper, StyledCard } from '../styled'

const AccountInfo = ({
  formValues,
  handleChange,
  togglePassword,
  onSubmit,
}) => {
  return (
    <StyledWrapper>
      <h2 className="StyledCard__title">Create account</h2>
      <div className="StyledCard__inner">
        {/* <Input
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
          /> */}
        <Input
          value={formValues['email']}
          onChange={handleChange('email')}
          type="email"
          name="email"
          id="signUp__email"
          label="Email"
        />
        <Input
          value={formValues['password']}
          onChange={handleChange('password')}
          type={formValues.showPassword ? 'text' : 'password'}
          name="password"
          id="signUp__password"
          label="Password"
          icon={
            <button
              type="button"
              aria-label="toggle password visibility"
              onClick={togglePassword}
            >
              {formValues.showPassword ? <Visibility /> : <VisibilityOff />}
            </button>
          }
          iconPosition="end"
        />
        <Input
          value={formValues['confirmPassword']}
          onChange={handleChange('confirmPassword')}
          type={formValues.showPassword ? 'text' : 'password'}
          name="confirmPassword"
          id="signUp__confirmPassword"
          label="Confirm Password"
          icon={
            <button
              type="button"
              aria-label="toggle password visibility"
              onClick={togglePassword}
            >
              {formValues.showPassword ? <Visibility /> : <VisibilityOff />}
            </button>
          }
          iconPosition="end"
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

AccountInfo.propTypes = {
  formValues: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  togglePassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default AccountInfo
