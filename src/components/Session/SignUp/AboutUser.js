import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Button from '@components/UI/Button'
import Input from '@components/Forms/Input'
import Select from '@components/Forms/Select'
import SelectPhone from '@components/Forms/SelectPhone'
import DatePicker from '@components/Forms/DatePicker'
import countriesData from '@data/countries.json'
import { FlagIcon } from 'react-flag-kit'
import { StyledWrapper } from '../styled'

const AboutUser = ({ formValues, handleUpdate, onSubmit }) => {
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
              parentProps={{ className: 'StyledCard__flexItem' }}
              type="text"
              label="First name"
            />
            <Input
              value={formValues['lastName']}
              handleUpdate={handleUpdate('lastName')}
              parentProps={{ className: 'StyledCard__flexItem' }}
              type="text"
              label="Last name"
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
  formValues: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default AboutUser
