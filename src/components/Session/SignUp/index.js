import React, { useState } from 'react'
import Link from 'next/link'
import LogoSVG from '@public/images/slatam-logo.svg'
import Account from './Account'
import AboutUser from './AboutUser'
import Company from './Company'
import Completed from './Completed'
import { StyledWrapper, StyledCard } from '../styled'

const stepsItems = [
  passedProps => <Account {...passedProps} />,
  passedProps => <AboutUser {...passedProps} />,
  passedProps => <Company {...passedProps} />,
  passedProps => <Completed {...passedProps} />,
]

const SignUp = () => {
  const maxIndex = stepsItems.length - 1
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState('PREV')

  const handleNext = () => {
    setDirection('NEXT')
    if (activeIndex + 1 > maxIndex) return
    setActiveIndex(activeIndex + 1)
  }

  const handlePrev = () => {
    setDirection('PREV')
    if (activeIndex - 1 < 0) return
    setActiveIndex(activeIndex - 1)
  }

  return (
    <StyledWrapper>
      <div className="Logo">
        <Link href="/">
          <a>
            <LogoSVG />
          </a>
        </Link>
      </div>
      <StyledCard>
        {stepsItems[activeIndex]({
          handleNext,
          handlePrev,
        })}
      </StyledCard>
      {activeIndex === 0 && (
        <p className="UnderText">
          By creating an account you agree to our{' '}
          <Link href="/">
            <a>Terms and Conditions</a>
          </Link>
        </p>
      )}
    </StyledWrapper>
  )
}

export default SignUp
