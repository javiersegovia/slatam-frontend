import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Button from '@components/UI/Button'
import Input from '@components/Forms/Input'
import Select from '@components/Forms/Select'
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
        // preffix: <FlagIcon code={code2} />,
      })),
    []
  )

  console.log(countries)

  const contItems = [
    { value: 'BLA', description: 'This is bla' },
    { value: 'BLE', description: 'This is blea' },
    { value: 'BLAEE', description: 'This is bleea' },
  ]

  const displayCountry = formValues.country && (
    <FlagIcon code={formValues.country} />
  )

  return (
    <StyledWrapper>
      <h2 className="StyledCard__title">About you</h2>
      <div className="StyledCard__inner AboutUser">
        <div className="StyledCard__gridContainer">
          <Input
            value={formValues['firstName']}
            onChange={handleChange('firstName')}
            parentProps={{ className: 'StyledCard__flexItem' }}
            type="text"
            name="firstName"
            id="signUp__firstName"
            label="First name"
          />
          <Input
            value={formValues['lastName']}
            onChange={handleChange('lastName')}
            parentProps={{ className: 'StyledCard__flexItem' }}
            type="text"
            name="lastName"
            id="signUp__lastName"
            label="Last name"
          />
        </div>
        <div className="StyledCard__gridContainer">
          <Select
            value={formValues['country']}
            displayValue={displayCountry}
            onChange={handleChange('country')}
            type="text"
            name="country"
            id="signUp__country"
            label="Country"
            selectItems={countries}
          />
          <Input
            value={formValues['city']}
            onChange={handleChange('city')}
            parentProps={{ className: 'StyledCard__flexItem' }}
            type="text"
            name="city"
            id="signUp__city"
            label="City of residence"
          />
        </div>
        <div className="StyledCard__gridContainer">
          <Input
            value={formValues['phone']}
            onChange={handleChange('phone')}
            type="phone"
            name="phone"
            id="signUp__phone"
            label="Contact number"
          />
          <Input
            value={formValues['birthDate']}
            onChange={handleChange('birthDate')}
            type="birthDate"
            name="birthDate"
            id="signUp__birthDate"
            label="Date of birth"
          />
        </div>
      </div>
      <Button
        type="submit"
        className="StyledCard__submitButton"
        onClick={onSubmit}
        color="yellow"
        name="aboutUser"
      >
        Continue
      </Button>
    </StyledWrapper>
  )
}

AboutUser.propTypes = {
  formValues: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default AboutUser
