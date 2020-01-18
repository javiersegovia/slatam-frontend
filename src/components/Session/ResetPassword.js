import React, { useState } from 'react'
import Container from '@components/UI/Container'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import { StyledCard, StyledFormControl } from './styled'

const ResetPassword = () => {
  const [formValues, setFormValues] = useState({
    password: '',
    confirm_password: '',
    showPassword: false,
  })

  const handleChange = name => event =>
    setFormValues({ ...formValues, [name]: event.target.value })

  const togglePassword = () =>
    setFormValues({ ...formValues, showPassword: !formValues.showPassword })

  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <Container>
      <StyledCard>
        <StyledFormControl marginTop="30px">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type={formValues.showPassword ? 'text' : 'password'}
            value={formValues.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePassword}
                >
                  {formValues.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </StyledFormControl>
        <StyledFormControl marginTop="30px">
          <InputLabel htmlFor="confirm_password">Confirm password</InputLabel>
          <Input
            id="confirm_password"
            type={formValues.showPassword ? 'text' : 'password'}
            value={formValues.confirm_password}
            onChange={handleChange('confirm_password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePassword}
                >
                  {formValues.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </StyledFormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onSubmit={onSubmit}
          style={{ marginTop: 30, width: '100%' }}
        >
          Submit
        </Button>
      </StyledCard>
    </Container>
  )
}

export default ResetPassword
