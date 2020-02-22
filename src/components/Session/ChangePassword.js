import React, { useState, useMemo } from 'react'
import Button from '@components/UI/Button'
import Input from '@components/Forms/Input'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import {
  useForm,
  NOT_EMPTY,
  MIN_CHARACTERS,
  SHOULD_MATCH_VALUE,
} from '@hooks/useForm'
import { StyledWrapper, StyledCard } from './styled'

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const errorValidations = useMemo(
    () => ({
      password: {
        fieldName: 'password',
        validations: [
          {
            type: NOT_EMPTY,
            errorMessage: 'Please enter a password.',
          },
          {
            type: MIN_CHARACTERS,
            errorMessage: 'Your password should have at least 6 characters.',
            minValue: 6,
          },
        ],
      },
      confirmPassword: {
        fieldName: 'confirmPassword',
        validations: [
          {
            type: NOT_EMPTY,
            errorMessage: 'Please confirm your password.',
          },
          {
            type: SHOULD_MATCH_VALUE,
            errorMessage: 'Your passwords do not match.',
            shouldMatchValue: formValues.password,
          },
        ],
      },
    }),
    [formValues.password]
  )
  const togglePassword = () => setShowPassword(!showPassword)

  const { formErrors, handleFormErrors, handleUpdate } = useForm({
    formValues,
    setFormValues,
    errorValidations,
  })

  const onSubmit = e => {
    e.preventDefault()
    const hasErrors = handleFormErrors()

    if (!hasErrors) {
      // save info to DB here
    }
  }

  return (
    <StyledWrapper>
      <StyledCard>
        <h2 className="StyledCard__title">Change password</h2>
        <form onSubmit={onSubmit} className="StyledCard__innerPadding">
          <div className="StyledCard__inner ChangePassword">
            <Input
              value={formValues.password}
              handleUpdate={handleUpdate('password')}
              type={showPassword ? 'text' : 'password'}
              errors={formErrors.password || null}
              handleFormErrors={() =>
                handleFormErrors(['password', 'confirmPassword'])
              }
              label="Password"
              icon={
                <button
                  type="button"
                  aria-label="toggle password visibility"
                  onClick={togglePassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </button>
              }
              iconPosition="end"
            />
            <Input
              value={formValues.confirmPassword}
              handleUpdate={handleUpdate('confirmPassword')}
              type={showPassword ? 'text' : 'password'}
              label="Confirm password"
              errors={formErrors.confirmPassword || null}
              handleFormErrors={() =>
                handleFormErrors(['password', 'confirmPassword'])
              }
              icon={
                <button
                  type="button"
                  aria-label="Toggle password visibility"
                  onClick={togglePassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
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
            Save
          </Button>
        </form>
      </StyledCard>
    </StyledWrapper>
  )
}

ChangePassword.propTypes = {}

export default ChangePassword
