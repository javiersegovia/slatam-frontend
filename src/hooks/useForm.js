import { useState } from 'react'
import isEmail from 'validator/lib/isEmail'

// General
export const NOT_EMPTY = 'NOT_EMPTY'
export const SHOULD_MATCH_FIELD = 'SHOULD_MATCH_FIELD'
export const SHOULD_MATCH_VALUE = 'SHOULD_MATCH_VALUE'

// Strings
export const MIN_CHARACTERS = 'MIN_CHARACTERS'
export const MAX_CHARACTERS = 'MAX_CHARACTERS'
export const VALID_EMAIL = 'VALID_EMAIL'
export const VALID_PHONE = 'VALID_PHONE'
export const AVAILABLE_COMPANY_NAME = 'AVAILABLE_COMPANY_NAME'
export const AVAILABLE_EMAIL = 'AVAILABLE_EMAIL'

// Numbers
export const MIN_VALUE = 'MIN_VALUE'
export const MAX_VALUE = 'MAX_VALUE'

// Select with multiple selections
export const MAX_ITEMS = 'MAX_ITEMS'

// Dates
export const MIN_DATE = 'MIN_DATE'
export const MAX_DATE = 'MAX_DATE'

export function validateErrors(props) {
  const { value, type, minValue = null, shouldMatchValue = null } = props

  const toStr = x => x && x.toString()
  const stringValue = toStr(value)
  const stringShouldMatchValue = toStr(shouldMatchValue)

  switch (type) {
    case NOT_EMPTY:
      return !stringValue

    case MIN_CHARACTERS:
      if (!stringValue) return null
      return stringValue.length < minValue

    case SHOULD_MATCH_VALUE:
      if (!stringValue || !stringShouldMatchValue) {
        return null
      }

      return stringValue !== stringShouldMatchValue

    case VALID_EMAIL:
      if (!stringValue) return null
      return !isEmail(stringValue)

    default:
      return null
  }
}

export const handleFieldErrors = props => {
  const { info, value } = props
  const { fieldName, validations, ...extra } = info

  const fieldErrors = validations.find(validation =>
    validateErrors({
      fieldName,
      value,
      ...validation,
      ...extra,
    })
  )

  return (fieldErrors && fieldErrors.errorMessage) || null
}

export const validateFormErrors = props => (fields = null) => {
  const { errorValidations, formValues, setFormErrors } = props

  if (!fields) {
    const formErrors = {}
    Object.keys(errorValidations).map(fieldName => {
      formErrors[fieldName] = handleFieldErrors({
        info: errorValidations[fieldName],
        value: formValues[fieldName],
      })
    })

    setFormErrors(prevState => ({ ...prevState, ...formErrors }))

    const hasErrors = Object.keys(formErrors).filter(key => formErrors[key])
    return hasErrors && hasErrors.length > 0
  }

  if (Array.isArray(fields)) {
    const formErrors = {}
    fields.map(fieldName => {
      formErrors[fieldName] = handleFieldErrors({
        info: errorValidations[fieldName],
        value: formValues[fieldName],
      })
    })

    setFormErrors(prevState => ({ ...prevState, ...formErrors }))

    const hasErrors = Object.keys(formErrors).filter(key => formErrors[key])
    return hasErrors && hasErrors.length > 0
  }

  if (typeof fields === 'string') {
    const error = {
      [fields]: handleFieldErrors({
        info: errorValidations[fields],
        value: formValues[fields],
      }),
    }

    return setFormErrors(prevState => ({ ...prevState, ...error }))
  }

  throw new Error('prop "Fields" has a wrong value type')
}

export const useForm = ({
  formValues,
  setFormValues,
  errorValidations = null,
}) => {
  const [formErrors, setFormErrors] = useState({})

  const handleFormErrors =
    errorValidations &&
    validateFormErrors({
      formValues,
      errorValidations,
      setFormErrors,
    })

  const handleUpdate = name => value => {
    setFormValues({ ...formValues, [name]: value })
  }

  return { formErrors, handleFormErrors, handleUpdate }
}
