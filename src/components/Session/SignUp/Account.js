import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Button from '@components/UI/Button'
import Input from '@components/Forms/Input'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { StyledWrapper } from '../styled'

const AccountInfo = ({
  formValues,
  handleChange,
  togglePassword,
  onSubmit,
}) => {
  return (
    <StyledWrapper>
      <h2 className="StyledCard__title">Create account</h2>
      <div className="StyledCard__inner Account">
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
        color="yellow"
        name="account"
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