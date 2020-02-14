import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Button from '@components/UI/Button'
import Input from '@components/Forms/Input'
import { StyledWrapper } from '../styled'

const Company = ({ formValues, handleChange, onSubmit }) => {
  return (
    <StyledWrapper>
      <h2 className="StyledCard__title">Your company</h2>
      <form onSubmit={onSubmit} className="StyledCard__innerPadding">
        <div className="StyledCard__inner Company">
          <Input
            value={formValues['companyName']}
            onChange={handleChange('companyName')}
            parentProps={{ className: 'StyledCard__flexItem' }}
            type="text"
            name="companyName"
            id="signUp__companyName"
            label="Company name"
          />
          <div className="StyledCard__gridContainer">
            <Input
              value={formValues['companyCountry']}
              onChange={handleChange('companyCountry')}
              parentProps={{ className: 'StyledCard__flexItem' }}
              type="text"
              name="companyCountry"
              id="signUp__companyCountry"
              label="Country of residence"
            />
            <Input
              value={formValues['companyCity']}
              onChange={handleChange('companyCity')}
              parentProps={{ className: 'StyledCard__flexItem' }}
              type="text"
              name="companyCity"
              id="signUp__companyCity"
              label="State of residence"
            />
          </div>
          <div className="StyledCard__gridContainer">
            <Input
              value={formValues['companyEmployees']}
              onChange={handleChange('companyEmployees')}
              parentProps={{ className: 'StyledCard__flexItem' }}
              type="text"
              name="companyEmployees"
              id="signUp__companyEmployees"
              label="Number of employees"
            />
            <Input
              value={formValues['companyCategories']}
              onChange={handleChange('companyCategories')}
              parentProps={{ className: 'StyledCard__flexItem' }}
              type="text"
              name="companyCategories"
              id="signUp__companyCategories"
              label="What industries are you interested in?"
            />
          </div>
        </div>
        <div className="StyledCard__submitButtonWrapper">
          <Button
            type="submit"
            className="StyledCard__submitButton limited"
            onClick={onSubmit}
            color="yellow"
            name="company"
            size="lg"
          >
            Continue
          </Button>
        </div>
        <p className="StyledCard__redirect">
          Do not want to create a company?{' '}
          <Link href="/">
            <a>Skip</a>
          </Link>
        </p>
      </form>
    </StyledWrapper>
  )
}

Company.propTypes = {
  formValues: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default Company
