import React from 'react'
import PropTypes from 'prop-types'
import { FlagIcon } from 'react-flag-kit'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { FixedSizeList as List } from 'react-window'

const RowItem = ({ data, index, style }) => {
  const { countries, handleCheck, checkedCountries } = data
  const country = countries[index]

  return (
    <li className="Shipping__listItem" key={country.code2} style={style}>
      <FlagIcon code={country.code2} size={24} />
      <FormControlLabel
        className="Shipping__checkboxWrapper"
        control={
          <>
            <Checkbox
              className="Shipping__checkbox"
              checked={checkedCountries[country.code2] || false}
              checkedIcon={
                <span className="checkbox__icon checkbox__checkedIcon" />
              }
              icon={<span className="checkbox__icon" />}
              onChange={handleCheck}
              value={country.code2}
              disableRipple
              color="default"
            />
          </>
        }
        label={<div className="Shipping__label">{country.name}</div>}
        labelPlacement="start"
        name={country.code2}
      />
    </li>
  )
}

RowItem.propTypes = {
  data: PropTypes.shape({
    countries: PropTypes.array.isRequired,
    checkedCountries: PropTypes.array.isRequired,
    handleCheck: PropTypes.func.isRequired,
  }),
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
}

const ShippingCountriesList = ({
  countries,
  checkedCountries,
  handleCheck,
}) => {
  return (
    <List
      itemData={{ countries, handleCheck, checkedCountries }}
      width={279}
      height={300}
      itemSize={45}
      itemCount={countries.length}
      className="Shipping__windowWrapper"
    >
      {RowItem}
    </List>
  )
}

ShippingCountriesList.propTypes = {
  countries: PropTypes.array.isRequired,
  checkedCountries: PropTypes.array.isRequired,
  handleCheck: PropTypes.func.isRequired,
}

export default ShippingCountriesList
