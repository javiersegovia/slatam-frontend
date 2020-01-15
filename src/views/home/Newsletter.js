import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Container from '@components/UI/Container'
import Button from '@components/UI/Button'
import { Text } from '@components/UI/Typography'

const SectionWrapper = styled.div`
  padding: 60px 0;
  background: ${props => props.theme.palette.snow.light};
  text-align: center;
  border-top: 1px solid ${props => props.theme.palette.palelilac.dark};

  .Newsletter__container {
    max-width: 700px;
  }

  .Newsletter__inputWrapper {
    border-radius: 35px;
    box-shadow: ${props => props.theme.bShadows.searchBar};
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    overflow: hidden;
    padding: 8px;
    margin: auto;
    background: ${props => props.theme.palette.palelilac.extralight};
    background: white;
  }

  .Newsletter__title {
    margin: 0;
    color: ${props => props.theme.palette.primary.main};
  }

  .Newsletter__input {
    padding: 0px 16px;
    width: 100%;
    font-size: 1.125rem;
  }

  .Newsletter__inputButton {
    background: ${props => props.theme.gradients.primary.main};
    border-radius: 50%;
    padding: 8px;
    color: white;
    display: inline-flex;

    svg {
      font-size: 1.875rem;
    }
  }

  .Newsletter__description {
    padding: 0 20px;
  }

  .Newsletter__underlineText {
    text-align: left;
    padding: 0 20px;
    font-style: italic;
  }
`
const Newsletter = () => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  return (
    <SectionWrapper>
      <Container className="Newsletter__container">
        <h4 className="Newsletter__title">Subscribe to our newsletter</h4>
        <Text className="Newsletter__description">
          We will keep you up to date with the latest product trends and
          industry news.
        </Text>
        <div className="Newsletter__inputWrapper">
          <input
            type="email"
            name="email"
            className="Newsletter__input"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <Button className="Newsletter__inputButton">
            <ArrowForwardIcon />
          </Button>
        </div>
        <Text size="body2" className="Newsletter__underlineText">
          You can unsubscribe anytime you want.
        </Text>
      </Container>
    </SectionWrapper>
  )
}

Newsletter.propTypes = {}

export default Newsletter
