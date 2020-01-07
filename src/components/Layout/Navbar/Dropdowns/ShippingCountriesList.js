import React from 'react'
import PropTypes from 'prop-types'
import { FlagIcon } from 'react-flag-kit'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const ShippingCountriesList = ({
  countries,
  checkedCountries,
  handleCheck,
}) => {
  return countries.map(({ code, name }) => (
    <li className="Shipping__listItem" key={code}>
      <FlagIcon code={code} size={24} />
      <FormControlLabel
        className="Shipping__checkboxWrapper"
        control={
          <>
            <Checkbox
              className="Shipping__checkbox"
              checked={checkedCountries[code] || false}
              checkedIcon={
                <span className="checkbox__icon checkbox__checkedIcon" />
              }
              icon={<span className="checkbox__icon" />}
              onChange={handleCheck}
              value={code}
              disableRipple
              color="default"
            />
          </>
        }
        label={name}
        labelPlacement="start"
        name={code}
      />
    </li>
  ))
}

ShippingCountriesList.propTypes = {}

export default ShippingCountriesList
