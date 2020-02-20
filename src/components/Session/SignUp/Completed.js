import React from 'react'
import Button from '@components/UI/Button'
import { StyledWrapper } from '../styled'

const Completed = () => {
  return (
    <StyledWrapper>
      <h2 className="StyledCard__title no-bg responsiveMargin">
        Congratulations!
      </h2>
      <div className="StyledCard__innerPadding">
        <div className="StyledCard__inner Completed">
          <p className="StyledCard__description">
            <span className="bold">You are now a member of Slatam.com!</span>
            <br />
            We have sent a confirmation email, please make sure to click the
            link that you have received.
          </p>
        </div>
        <div className="StyledCard__buttonsContainer">
          <Button href="/" color="default">
            Find products
          </Button>
          <Button href="/">Visit my dashboard</Button>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Completed
