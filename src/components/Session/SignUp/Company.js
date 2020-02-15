import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import Button from '@components/UI/Button'
import Input from '@components/Forms/Input'
import countriesData from '@data/countries.json'
import Select from '@components/Forms/Select'
import { FlagIcon } from 'react-flag-kit'
import { StyledWrapper } from '../styled'
import SkipCompanyModal from './SkipCompanyModal'

const selectEmployees = ['1-5', '6-11', '11-20', '21-50', '51-200', '201+']
const selectIndustries = [
  {
    value: '1',
    description: 'Computerss',
  },
  {
    value: '2',
    description: 'Agriculturr',
  },
  {
    value: '3',
    description: 'Babies',
  },
  {
    value: '4',
    description: 'Construction',
  },
  {
    value: '5',
    description: 'Food',
  },
  {
    value: '6',
    description: 'Medical',
  },
]

const Company = ({ formValues, handleUpdate, onSubmit }) => {
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
      country => country.code2 === formValues.companyCountry
    )

    return (selectedCountry && selectedCountry.states) || []
  }, [formValues.companyCountry])

  const displayCountry = formValues.companyCountry && (
    <>
      <div className="country">
        <FlagIcon code={formValues.companyCountry} />
      </div>
    </>
  )

  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <StyledWrapper>
      <h2 className="StyledCard__title">Your company</h2>
      <form onSubmit={onSubmit} className="StyledCard__innerPadding">
        <div className="StyledCard__inner Company">
          <Input
            value={formValues['companyName']}
            handleUpdate={handleUpdate('companyName')}
            parentProps={{ className: 'StyledCard__flexItem' }}
            type="text"
            name="companyName"
            id="signUp__companyName"
            label="Company name"
          />
          <div className="StyledCard__gridContainer">
            <Select
              value={formValues['companyCountry']}
              handleUpdate={handleUpdate('companyCountry')}
              displayValue={displayCountry}
              label="Country of residence"
              selectItems={countries}
              hasFilter
            />
            <Select
              value={formValues['companyState']}
              handleUpdate={handleUpdate('companyState')}
              label="State of residence"
              disabled={states.length === 0}
              displayRequirement={!!formValues.companyCountry}
              placeholder="Choose the state"
              disabledPlaceholder="Select country first"
              disabledWithDisplayRequirementMet="No states found"
              selectItems={states}
            />
          </div>
          <div className="StyledCard__gridContainer">
            <Select
              value={formValues['companyEmployees']}
              handleUpdate={handleUpdate('companyEmployees')}
              label="Number of employees"
              selectItems={selectEmployees}
            />
            <Select
              value={formValues['companyCategories']}
              handleUpdate={handleUpdate('companyCategories')}
              label="What industries are you interested in?"
              selectItems={selectIndustries}
              hasFilter
            />
          </div>
        </div>
        <div className="StyledCard__submitButtonWrapper">
          <Button
            type="submit"
            className="StyledCard__submitButton limited"
            onClick={onSubmit}
             
            name="company"
            size="lg"
          >
            Create company
          </Button>
        </div>
        <p className="StyledCard__redirect">
          Do not want to create a company right now?{' '}
          <button type="button" onClick={() => setIsOpenModal(true)}>
            <a>Skip</a>
          </button>
        </p>
      </form>
      <SkipCompanyModal isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
    </StyledWrapper>
  )
}

Company.propTypes = {
  formValues: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default Company
