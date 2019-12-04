import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Card from '@material-ui/core/Card'

export const StyledCard = styled(Card)`
  padding: 40px;
  max-width: 500px;
  margin: auto;
`

export const StyledTextField = styled(({ marginTop, ...rest }) => (
  <TextField {...rest} />
))`
  width: 100%;
  margin-top: ${props => props.marginTop};
`

export const StyledFormControl = styled(({ marginTop, ...rest }) => (
  <FormControl {...rest} />
))`
  width: 100%;
  margin-top: ${props => props.marginTop};
`
