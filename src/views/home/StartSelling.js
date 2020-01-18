import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from '@components/UI/Container'
import Button from '@components/UI/Button'
import { Text } from '@components/UI/Typography'

const StyledStartSelling = styled.div`
  margin: 120px 0 60px;

  ${props => props.theme.breakpoints.up('lg')} {
    padding: 0 30px;
  }

  .StartSelling__container {
    display: flex;
    align-items: center;
  }

  .StartSelling__imageWrapper {
    flex: 1 1 0;
    img {
      object-fit: contain;
      width: 100%;
    }

    ${props => props.theme.breakpoints.down('md')} {
      display: none;
    }
  }

  .StartSelling__contentWrapper {
    margin-left: 30px;
    flex: 0 1 50%;

    ${props => props.theme.breakpoints.down('md')} {
      flex: 1;
      margin-left: 0;
    }
  }

  .StartSelling__title {
    color: ${props => props.theme.palette.primary.main};
    margin: 0;

    ${props => props.theme.breakpoints.down('md')} {
      font-size: 1.75rem;
    }
  }

  .StartSelling__description {
    margin: 20px 0 0 0;
    font-size: 1.125rem;
    line-height: 34px;

    ${props => props.theme.breakpoints.down('sm')} {
      font-size: 1rem;
    }
  }

  .StartSelling__callToAction {
    display: flex;
    margin-top: 30px;

    ${props => props.theme.breakpoints.down('xs')} {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }

    ${props => props.theme.breakpoints.down('xxs')} {
      grid-template-columns: 1fr;
    }
  }

  .StartSelling__buttonSecondary {
    margin-left: 20px;

    ${props => props.theme.breakpoints.down('xs')} {
      margin-left: 0px;
    }
  }
`

const StartSelling = props => {
  return (
    <StyledStartSelling>
      <Container limited className="StartSelling__container">
        <div className="StartSelling__imageWrapper">
          <img src="/images/img-world.png" alt="World" />
        </div>
        <div className="StartSelling__contentWrapper">
          <h3 className="StartSelling__title">
            Sell your products to the world
          </h3>
          <Text className="StartSelling__description">
            If you got a business or a product and you would like to know more
            about the B2B e-commerce, you are in the right place. Our goal is to
            get your business going, find new clients and expand your brand
            beyond the borders.
          </Text>
          <div className="StartSelling__callToAction">
            <Button
              type="button"
              size="lg"
              className="StartSelling__buttonPrimary"
            >
              Create account
            </Button>
            <Button
              type="button"
              secondary
              size="lg"
              className="StartSelling__buttonSecondary"
            >
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </StyledStartSelling>
  )
}

StartSelling.propTypes = {}

export default StartSelling
