import React, { useState } from 'react'
import Container from '@components/UI/Container'
import Button from '@material-ui/core/Button'

import { StyledCard, StyledTextField } from './styled'

const RequestReset = () => {
  const [formValues, setFormValues] = useState({
    email: '',
  })

  const handleChange = name => event =>
    setFormValues({ ...formValues, [name]: event.target.value })

  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <Container>
      <StyledCard>
        <StyledTextField
          id="email"
          label="Email"
          value={formValues['email']}
          onChange={handleChange('email')}
          marginTop="30px"
        />
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

export default RequestReset
