import React, { useState } from 'react'
import PropTypes from 'prop-types'
import PhoneInput from 'react-phone-number-input'

const SelectPhone = ({ value, defaultCountry = null, placeholder = null }) => {
  const [phoneValue, setPhoneValue] = useState()
  return (
    <PhoneInput
      defaultCountry={defaultCountry}
      placeholder={placeholder}
      value={phoneValue}
      onChange={setPhoneValue}
    />
  )
}

SelectPhone.propTypes = {}

export default SelectPhone
