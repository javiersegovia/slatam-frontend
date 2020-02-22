import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Button from '@components/UI/Button'
import Input from '@components/Forms/Input'
import { useForm, NOT_EMPTY, VALID_EMAIL } from '@hooks/useForm'
import LogoSVG from '@public/images/slatam-logo.svg'
import { StyledWrapper, StyledCard } from './styled'

const errorValidations = {
  email: {
    fieldName: 'email',
    validations: [
      {
        type: NOT_EMPTY,
        errorMessage: 'Please enter your email.',
      },
      {
        type: VALID_EMAIL,
        errorMessage: 'Please enter a valid email.',
      },
    ],
  },
}

const RequestChange = () => {
  const [formValues, setFormValues] = useState({
    email: '',
  })

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
      <div className="Logo">
        <Link href="/">
          <a>
            <LogoSVG />
          </a>
        </Link>
      </div>
      <StyledCard>
        <h2 className="StyledCard__title">Request change</h2>
        <form onSubmit={onSubmit} className="StyledCard__innerPadding">
          <div className="StyledCard__description RequestChange">
            <p>
              To change your password, you must click the link that we will send
              to your email.
            </p>
          </div>
          <div className="StyledCard__inner RequestChange">
            <Input
              value={formValues.email}
              handleUpdate={handleUpdate('email')}
              type="email"
              name="email"
              id="signUp__email"
              label="Email"
              autoComplete="email"
              errors={formErrors.email || null}
              handleFormErrors={() => handleFormErrors('email')}
            />
          </div>
          <Button
            type="submit"
            className="StyledCard__submitButton"
            onClick={onSubmit}
            name="account"
            size="lg"
          >
            Send me the link
          </Button>
        </form>
        <div className="StyledCard__redirectWrapper">
          <p className="StyledCard__redirect" style={{ padding: '0 30px' }}>
            <Link href="/sign-in">
              <a>Go back and sign in</a>
            </Link>
          </p>
        </div>
      </StyledCard>
    </StyledWrapper>
  )
}

RequestChange.propTypes = {}

export default RequestChange
