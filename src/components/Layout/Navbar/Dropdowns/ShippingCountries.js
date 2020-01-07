import React, { Component } from 'react'
import ShippingCountriesList from './ShippingCountriesList'
import StyledDropdownWrapper from './styled'

// TODO: Replace with real data
const countries = [
  {
    code: 'CO',
    name: 'Colombia',
  },
  {
    code: 'VE',
    name: 'Venezuela',
  },
  {
    code: 'US',
    name: 'United States',
  },
  {
    code: 'DE',
    name: 'Germany',
  },
  {
    code: 'ES',
    name: 'Spain',
  },
  {
    code: 'BR',
    name: 'Brasil',
  },
  {
    code: 'MX',
    name: 'Mexico',
  },
  {
    code: 'CN',
    name: 'China',
  },
  {
    code: 'PE',
    name: 'Peru',
  },
  {
    code: 'IN',
    name: 'India',
  },
  {
    code: 'AR',
    name: 'Argentina',
  },
  {
    code: 'RU',
    name: 'Russia',
  },
]

export default class ShippingCountries extends Component {
  state = {
    inputValue: '',
    checkedCountries: [],
  }

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  handleCheck = event => {
    const { checked, value } = event.target

    this.setState(prevState => ({
      ...prevState,
      checkedCountries: {
        ...prevState.checkedCountries,
        [value]: checked,
      },
    }))
  }

  render() {
    return (
      <StyledDropdownWrapper as="div">
        <p className="Shipping__description">
          Please select the countries you may ship for
        </p>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          className="Shipping__searchInput"
          placeholder="Search four your country..."
        />
        <ul className="Shipping__list">
          <ShippingCountriesList
            countries={countries}
            checkedCountries={this.state.checkedCountries}
            handleCheck={this.handleCheck}
          />
        </ul>
      </StyledDropdownWrapper>
    )
  }
}
