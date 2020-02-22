import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import { rgba } from 'polished'

export const StyledWrapper = styled.div`
  position: relative;

  .Logo {
    text-align: center;
    margin-bottom: 30px;

    ${({ theme }) => theme.breakpoints.down('sm')} {
      display: none;
    }
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

    ${({ theme }) => theme.breakpoints.down('sm')} {
      color: ${({ theme }) => theme.palette.black.main};
      padding: 0 20px;
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
    color: ${({ theme }) => theme.palette.primary.main};
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    padding: 20px 0;

    ${({ theme }) => theme.breakpoints.down('sm')} {
      font-size: 2rem;
    }
  }

  .StyledModal__description {
    font-size: 1.125rem;
  }

  .StyledModal__buttonsContainer {
    margin: 30px auto 0;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 20px;

    ${({ theme }) => theme.breakpoints.down('xs')} {
      grid-auto-flow: row;
      width: 100%;
    }
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
  min-width: 350px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    border-radius: 0;
    box-shadow: none;
    min-width: 0;
  }

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
    font-size: 2rem;
    font-weight: 500;
    padding: 20px 0;
    border-top-left-radius: ${CARD_BORDER_RADIUS};
    border-top-right-radius: ${CARD_BORDER_RADIUS};

    ${({ theme }) => theme.breakpoints.down('sm')} {
      font-size: 2rem;
    }

    &.no-bg {
      background: transparent;
    }

    &.responsiveMargin {
      ${({ theme }) => theme.breakpoints.down('sm')} {
        padding-top: 60px;
      }
    }
  }

  .StyledCard__inner {
    display: grid;
    grid-gap: 25px;
    margin: 30px auto;

    &.AboutUser,
    &.Company,
    &.Completed {
      width: 550px;

      ${({ theme }) => theme.breakpoints.down('sm')} {
        width: 100%;
      }
    }
  }

  .StyledCard__description {
    text-align: center;
    font-size: 1.125rem;
    margin: 0;

    .bold {
      font-weight: 500;
    }

    &.RequestChange {
      max-width: 350px;
      margin-top: 30px;
    }
  }

  .StyledCard__gridContainer {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 700px) {
      grid-template-columns: 1fr;
    }
  }

  .StyledCard__submitButtonWrapper {
    margin-top: 60px;
    text-align: center;
    width: 100%;

    ${({ theme }) => theme.breakpoints.down('sm')} {
      margin-top: 30px;
    }

    &.grid {
      display: grid;
      grid-template-columns: 1fr auto 1fr;

      ${({ theme }) => theme.breakpoints.down('xs')} {
        grid-template-columns: 1fr;
        grid-gap: 20px;
      }

      .StyledCard__navButtons {
        display: flex;
        align-items: center;
        justify-content: center;

        &.StyledCard__responsiveNavButtons {
          ${({ theme }) => theme.breakpoints.down('xs')} {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: 1fr 1fr;
          }
        }
      }
    }

    .StyledCard__prevButton,
    .StyledCard__skipButton {
      color: ${({ theme }) => theme.palette.black.main};
      font-weight: 500;
      letter-spacing: 0.5px;
      text-decoration: underline;

      ${({ theme }) => theme.breakpoints.down('xs')} {
        background: ${props => props.theme.gradients.snow.main};
        color: ${props => props.theme.palette.black.main};
        border-radius: 6px;
        padding: 12px 16px 13px;
        box-shadow: ${props => props.theme.bShadows.button};
        text-decoration: none;
      }
    }

    .StyledCard__prevButton.showResponsive {
      display: none;
    }

    ${({ theme }) => theme.breakpoints.down('xs')} {
      .StyledCard__prevButton.hideResponsive {
        display: none;
      }
      .StyledCard__prevButton.showResponsive {
        display: block;
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

      ${({ theme }) => theme.breakpoints.down('xs')} {
        width: 100%;
      }
    }
  }

  .StyledCard__redirectWrapper {
    margin: 30px 0 0;
    text-align: center;
  }

  .StyledCard__redirect {
    text-align: center;
    margin: 0;
    font-size: 0.875rem;

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

    ${({ theme }) => theme.breakpoints.down('xs')} {
      grid-auto-flow: row;
      width: 100%;
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
