import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import Button from '@components/UI/Button'
import Input from '@components/Forms/Input'
import Select from '@components/Forms/Select'
import SelectPhone from '@components/Forms/SelectPhone'
import DatePicker from '@components/Forms/DatePicker'
import countriesData from '@data/countries.json'
import { FlagIcon } from 'react-flag-kit'
import { useForm, NOT_EMPTY } from '@hooks/useForm'
import { StyledWrapper } from '../styled'

const errorValidations = {
  firstName: {
    fieldName: 'firstName',
    validations: [
      {
        type: NOT_EMPTY,
        errorMessage: 'Please enter your first name.',
      },
    ],
  },
  lastName: {
    fieldName: 'lastName',
    validations: [
      {
        type: NOT_EMPTY,
        errorMessage: 'Please enter your last name.',
      },
    ],
  },
}

const AboutUser = ({ handleNext }) => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    country: '',
    state: '',
    phone: '',
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
      handleNext()
    }
  }

  const countries = useMemo(
    () =>
      countriesData.map(({ name, code2 }) => ({
        value: code2,
        description: name,
      })),
    []
  )

  const states = useMemo(() => {
    const selectedCountry = countriesData.find(
      country => country.code2 === formValues.country
    )

    return (selectedCountry && selectedCountry.states) || []
  }, [formValues.country])

  const displayCountry = formValues.country && (
    <>
      <div className="country">
        <FlagIcon code={formValues.country} />
      </div>
    </>
  )

  return (
    <StyledWrapper>
      <h2 className="StyledCard__title">About you</h2>
      <form onSubmit={onSubmit} className="StyledCard__innerPadding">
        <input type="hidden" value="medmasdsajdsake" />
        <div className="StyledCard__inner AboutUser">
          <div className="StyledCard__gridContainer">
            <Input
              value={formValues['firstName']}
              handleUpdate={handleUpdate('firstName')}
              type="text"
              label="First name"
              errors={formErrors.firstName || null}
              handleFormErrors={() => handleFormErrors('firstName')}
            />
            <Input
              value={formValues['lastName']}
              handleUpdate={handleUpdate('lastName')}
              type="text"
              label="Last name"
              errors={formErrors.lastName || null}
              handleFormErrors={() => handleFormErrors('lastName')}
            />
          </div>
          <div className="StyledCard__gridContainer">
            <Select
              value={formValues['country']}
              handleUpdate={handleUpdate('country')}
              displayValue={displayCountry}
              label="Country"
              selectItems={countries}
              hasFilter
            />
            <Select
              value={formValues['state']}
              handleUpdate={handleUpdate('state')}
              label="State"
              disabled={states.length === 0}
              displayRequirement={!!formValues.country}
              placeholder="Choose your state"
              disabledPlaceholder="Select country first"
              disabledWithDisplayRequirementMet="No states found"
              selectItems={states}
            />
          </div>
          <div className="StyledCard__gridContainer">
            <SelectPhone
              value={formValues['phone']}
              handleUpdate={handleUpdate('phone')}
              label="Contact number"
              defaultCountry={formValues['country']}
            />
            <DatePicker
              value={formValues['birthDate']}
              handleUpdate={handleUpdate('birthDate')}
              label="Date of birth"
              variant="birthdate"
            />
          </div>
        </div>
        <div className="StyledCard__submitButtonWrapper">
          <Button
            type="submit"
            className="StyledCard__submitButton limited"
            onClick={onSubmit}
            name="aboutUser"
            size="lg"
          >
            Continue
          </Button>
        </div>
      </form>
    </StyledWrapper>
  )
}

AboutUser.propTypes = {
  handleNext: PropTypes.func.isRequired,
}

export default AboutUser
