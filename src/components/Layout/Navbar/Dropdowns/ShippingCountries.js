import React, { useState, useEffect } from 'react'
import countriesData from '@data/countries.json'
import ShippingCountriesList from './ShippingCountriesList'
import StyledDropdownWrapper from './styled'

const ShippingCountries = props => {
  const [checkedCountries, setCheckedCountries] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [filteredCountries, setFilteredCountries] = useState(countriesData)

  const handleChange = e => {
    setSearchValue(e.target.value)
  }

  const handleCheck = event => {
    const { checked, value } = event.target

    setCheckedCountries(prevState => ({
      ...prevState,
      [value]: checked,
    }))
  }

  useEffect(() => {
    const results = countriesData.filter(country =>
      country.name.toLowerCase().includes(searchValue.toLowerCase())
    )

    setFilteredCountries(results)
  }, [searchValue])

  return (
    <StyledDropdownWrapper as="div">
      <p className="Shipping__description">
        Select the countries you may ship for
      </p>
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        className="Shipping__searchInput"
        placeholder="Type to find your country"
      />
      <ul className="Shipping__list">
        <ShippingCountriesList
          countries={filteredCountries}
          checkedCountries={checkedCountries}
          handleCheck={handleCheck}
        />
      </ul>
    </StyledDropdownWrapper>
  )
}

export default ShippingCountries
