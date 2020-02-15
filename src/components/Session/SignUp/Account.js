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
  handleUpdate,
  togglePassword,
  onSubmit,
}) => {
  return (
    <StyledWrapper>
      <h2 className="StyledCard__title">Create account</h2>
      <form onSubmit={onSubmit} className="StyledCard__innerPadding">
        <div className="StyledCard__inner Account">
          <Input
            value={formValues['email']}
            handleUpdate={handleUpdate('email')}
            type="email"
            name="email"
            id="signUp__email"
            label="Email"
            autoComplete="email"
          />
          <Input
            value={formValues['password']}
            handleUpdate={handleUpdate('password')}
            type={formValues.showPassword ? 'text' : 'password'}
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
            handleUpdate={handleUpdate('confirmPassword')}
            type={formValues.showPassword ? 'text' : 'password'}
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
           
          name="account"
          size="lg"
        >
          Create account
        </Button>
      </form>
      <div className="StyledCard__redirectWrapper">
        <p className="StyledCard__redirect">
          Already have an account?{' '}
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </p>
      </div>
    </StyledWrapper>
  )
}

AccountInfo.propTypes = {
  formValues: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  togglePassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default AccountInfo
