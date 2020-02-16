import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import { rgba } from 'polished'

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

const CARD_BORDER_RADIUS = '15px'

export const StyledModal = styled.div`
  background: ${({ theme }) => theme.palette.palelilac.extralight};
  border-radius: ${CARD_BORDER_RADIUS};
  box-shadow: ${({ theme }) => theme.bShadows.cards};
  padding: 30px;
  text-align: center;
  max-width: 500px;

  .StyledModal__title {
    margin: 0;
    color: ${({ theme }) => theme.palette.black.light};
    text-align: center;
    font-size: 2.5rem;
    font-weight: normal;
    padding: 20px 0;
  }

  .StyledModal__description {
    font-size: 1.125rem;
  }

  .StyledModal__buttonsContainer {
    margin: 30px auto 0;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 20px;
  }
`

export const StyledCard = styled.div`
  background: ${({ theme }) => theme.palette.palelilac.extralight};
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: ${CARD_BORDER_RADIUS};
  box-shadow: ${({ theme }) => theme.bShadows.cards};
  padding-bottom: 30px;

  .StyledCard__innerPadding {
    padding: 0 30px;
  }

  .StyledCard__divider {
    margin: 30px 0;
    height: 1px;
    background: ${({ theme }) => theme.palette.slategray.extralight};
  }

  .StyledCard__title {
    margin: 0;
    color: ${({ theme }) => theme.palette.primary.main};
    background: ${({ theme }) => rgba(theme.palette.palelilac.light, 0.65)};
    text-align: center;
    font-size: 2.5rem;
    font-weight: 500;
    padding: 20px 0;
    border-top-left-radius: ${CARD_BORDER_RADIUS};
    border-top-right-radius: ${CARD_BORDER_RADIUS};

    &.no-bg {
      background: transparent;
    }
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
    &.Completed {
      width: 550px;
      margin-top: 10px;
    }
  }

  .StyledCard__description {
    text-align: center;
    font-size: 1.125rem;
    margin: 0;

    .bold {
      font-weight: 500;
    }
  }

  .StyledCard__gridContainer {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: 1fr 1fr;
  }

  .StyledCard__submitButtonWrapper {
    margin-top: 60px;
    text-align: center;
    width: 100%;

    &.grid {
      display: grid;
      grid-template-columns: 1fr auto 1fr;

      & > div {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .StyledCard__submitButton {
    margin-top: 30px;
    width: 100%;

    &.submitModal {
      margin: 0;
    }

    &.limited {
      width: auto;
      margin: auto;
      padding-left: 50px;
      padding-right: 50px;
    }
  }

  .StyledCard__prevButton,
  .StyledCard__skipButton {
    color: ${({ theme }) => theme.palette.black.main};
    font-weight: 500;
    letter-spacing: 0.5px;
    text-decoration: underline;
  }

  .StyledCard__redirectWrapper {
    margin: 30px 0 0;
    text-align: center;
  }

  .StyledCard__redirect {
    text-align: center;
    margin: 20px 0 0;
    font-size: 1rem;

    a {
      color: ${({ theme }) => theme.palette.black.main};
      font-weight: 500;
      letter-spacing: 0.5px;
      text-decoration: underline;
    }
  }

  .StyledCard__buttonsContainer {
    margin: 30px auto 0;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 20px;
    text-align: center;
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
