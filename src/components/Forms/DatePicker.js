import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { DatePicker as MuiDatePicker } from '@material-ui/pickers'
import format from 'date-fns/format'
import isValid from 'date-fns/isValid'
import uuid from 'uuid/v4'
import Label from './Label'
import { StyledInput } from './Input'

const DatePicker = ({
  value = null,
  format: formatDate = null,
  placeholder = null,
  handleUpdate,
  label,
  variant = null,
}) => {
  const randomID = useMemo(() => uuid(), [])

  const renderInput = props => (
    <input
      type="text"
      className="StyledInput__input datepicker no-input"
      {...props}
    />
  )

  const options = () => {
    switch (variant) {
      case 'birthdate':
        return {
          disableFuture: true,
          openTo: 'year',
          views: ['year', 'month', 'date'],
        }
      default:
        return {}
    }
  }

  const formattedLabel = date =>
    date && isValid(date) ? format(date, 'MMMM dd, yyyy') : null

  return (
    <StyledInput>
      {label && <Label htmlFor={randomID}>{label}</Label>}

      <div className="inputWrapper">
        <MuiDatePicker
          {...options()}
          value={value}
          placeholder={placeholder}
          id={randomID}
          onChange={handleUpdate}
          format={formatDate}
          labelFunc={formattedLabel}
          TextFieldComponent={renderInput}
          autoOk
        />
      </div>
    </StyledInput>
  )
}

DatePicker.propTypes = {
  value: PropTypes.oneOf([PropTypes.object, PropTypes.string]),
  format: PropTypes.string,
  placeholder: PropTypes.string,
  handleUpdate: PropTypes.func.isRequired,
  label: PropTypes.string,
  variant: PropTypes.string,
}

export default DatePicker
