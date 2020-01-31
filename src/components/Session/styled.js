import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'

export const StyledWrapper = styled.div`
  position: relative;

  .Logo {
    text-align: center;
    margin-bottom: 30px;
  }

  .UnderText {
    color: white;
    font-style: italic;
    text-align: center;
    margin-top: 10px;

    a {
      font-weight: 500;
      text-decoration: underline;
    }
  }
`

export const StyledCard = styled.div`
  padding: 30px;
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.bShadows.cards};

  .StyledCard__divider {
    margin: 30px 0;
    height: 1px;
    background: ${({ theme }) => theme.palette.slategray.extralight};
  }

  .StyledCard__title {
    margin: 0;
    color: ${({ theme }) => theme.palette.primary.main};
    text-align: center;
    font-size: 2.5rem;
    font-weight: normal;
  }

  .StyledCard__inner {
    display: grid;
    grid-gap: 25px;
    margin-top: 30px;

    &.AboutUser {
      width: 550px;
    }
    &.Company {
      width: 550px;
    }
  }

  .StyledCard__gridContainer {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: 1fr 1fr;
  }

  .StyledCard__submitButton {
    margin-top: 60px;
    width: 100%;

    &.submitModal {
      margin: 0;
    }
  }

  .StyledCard__redirect {
    padding-top: 30px;
    text-align: center;
    margin: 0;

    a {
      color: ${({ theme }) => theme.palette.primary.main};
      font-weight: 500;
    }
  }
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
