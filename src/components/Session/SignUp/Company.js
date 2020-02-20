import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import Button from '@components/UI/Button'
import Input from '@components/Forms/Input'
import countriesData from '@data/countries.json'
import Select from '@components/Forms/Select'
import { FlagIcon } from 'react-flag-kit'
import { useForm, NOT_EMPTY } from '@hooks/useForm'
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

const errorValidations = {
  companyName: {
    fieldName: 'companyName',
    validations: [
      {
        type: NOT_EMPTY,
        errorMessage: 'Please enter the company name.',
      },
    ],
  },
  companyCountry: {
    fieldName: 'companyCountry',
    validations: [
      {
        type: NOT_EMPTY,
        errorMessage: 'Please enter the company country.',
      },
    ],
  },
  // companyRole: {
  //   fieldName: 'companyRole',
  //   validations: [
  //     {
  //       type: NOT_EMPTY,
  //       errorMessage: 'Please enter your last name.',
  //     },
  //   ],
  // },
}

const Company = ({ handleNext, handlePrev }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [formValues, setFormValues] = useState({
    companyName: '',
    companyCountry: '',
    companyState: '',
    companyEmployees: '',
    companyCategories: '',
    companyRole: '',
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

  return (
    <StyledWrapper>
      <h2 className="StyledCard__title">Your company</h2>
      <form onSubmit={onSubmit} className="StyledCard__innerPadding">
        <div className="StyledCard__inner Company">
          <div className="StyledCard__gridContainer">
            <Input
              value={formValues.companyName}
              handleUpdate={handleUpdate('companyName')}
              label="Company name"
              errors={formErrors.companyName || null}
              handleFormErrors={() => handleFormErrors('companyName')}
            />
            <Select
              value={formValues.companyEmployees}
              handleUpdate={handleUpdate('companyEmployees')}
              label="Number of employees"
              selectItems={selectEmployees}
            />
          </div>
          <div className="StyledCard__gridContainer">
            <Select
              value={formValues.companyCountry}
              handleUpdate={handleUpdate('companyCountry')}
              displayValue={displayCountry}
              label="Country of residence"
              selectItems={countries}
              hasFilter
              errors={formErrors.companyCountry || null}
              handleFormErrors={() => handleFormErrors('companyCountry')}
            />
            <Select
              value={formValues.companyState}
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
          <Select
            value={formValues.companyCategories}
            handleUpdate={handleUpdate('companyCategories')}
            label="What industries are you interested in?"
            selectItems={selectIndustries}
            hasFilter
            isMultiple
          />
        </div>
        <div className="StyledCard__submitButtonWrapper grid">
          <div className="StyledCard__navButtons">
            <button
              type="button"
              onClick={() => handlePrev()}
              className="StyledCard__prevButton hideResponsive"
            >
              Go back
            </button>
          </div>
          <Button
            type="submit"
            className="StyledCard__submitButton limited"
            onClick={onSubmit}
            name="company"
            size="lg"
          >
            Create company
          </Button>
          <div className="StyledCard__navButtons StyledCard__responsiveNavButtons">
            <button
              type="button"
              onClick={() => handlePrev()}
              className="StyledCard__prevButton showResponsive"
            >
              Go back
            </button>
            <button
              type="button"
              onClick={() => setIsOpenModal(true)}
              className="StyledCard__skipButton"
            >
              Skip
            </button>
          </div>
        </div>
      </form>
      <SkipCompanyModal
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        handleNext={handleNext}
      />
    </StyledWrapper>
  )
}

Company.propTypes = {
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
}

export default Company
