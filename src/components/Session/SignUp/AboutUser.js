import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Button from '@components/UI/Button'
import Input from '@components/Forms/Input'
import Select from '@components/Forms/Select'
import SelectPhone from '@components/Forms/SelectPhone'
import Label from '@components/Forms/Label'
import countriesData from '@data/countries.json'
import { FlagIcon } from 'react-flag-kit'
import { StyledWrapper } from '../styled'

const AboutUser = ({ formValues, handleChange, onSubmit }) => {
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

  // const modifiedCountries = () =>
  //   countriesData.map(country => {
  //     let newCountry

  //     if (country.states.length > 0) {
  //       const newStates = country.states.map((state, idx) => ({
  //         value: `${country.code2}__${idx}`,
  //         description: state.name,
  //       }))

  //       newCountry = {
  //         ...country,
  //         states: [...newStates],
  //       }
  //     }

  //     return newCountry || country
  //   })

  return (
    <StyledWrapper>
      <h2 className="StyledCard__title">About you</h2>
      <form onSubmit={onSubmit} className="StyledCard__innerPadding">
        <input type="hidden" value="medmasdsajdsake" />
        <div className="StyledCard__inner AboutUser">
          <p className="StyledCard__description">
            Welcome to Slatam! Please, introduce yourself.
          </p>
          <div className="StyledCard__gridContainer">
            <Input
              value={formValues['firstName']}
              onChange={handleChange('firstName')}
              parentProps={{ className: 'StyledCard__flexItem' }}
              type="text"
              label="First name"
            />
            <Input
              value={formValues['lastName']}
              onChange={handleChange('lastName')}
              parentProps={{ className: 'StyledCard__flexItem' }}
              type="text"
              label="Last name"
            />
          </div>
          <div className="StyledCard__gridContainer">
            <Select
              value={formValues['country']}
              displayValue={displayCountry}
              displayTag="country"
              onChange={handleChange('country')}
              type="text"
              label="Country"
              selectItems={countries}
              hasFilter
            />
            <Select
              value={formValues['state']}
              onChange={handleChange('state')}
              type="text"
              label="State"
              disabled={states.length === 0}
              displayRequirement={!!formValues.country}
              placeholder="Choose your state"
              disabledPlaceholder="Select your country"
              disabledWithDisplayRequirementMet="No states found"
              selectItems={states}
            />
          </div>
          <div className="StyledCard__gridContainer">
            <SelectPhone
              value={formValues['phone']}
              onChange={handleChange('phone')}
              label="Contact number"
            />
            <Input
              value={formValues['birthDate']}
              onChange={handleChange('birthDate')}
              type="birthDate"
              label="Date of birth"
            />
          </div>
        </div>
        <div className="StyledCard__submitButtonWrapper">
          <Button
            type="submit"
            className="StyledCard__submitButton limited"
            onClick={onSubmit}
            color="yellow"
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
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default AboutUser
