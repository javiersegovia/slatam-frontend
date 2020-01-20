import React, { useState } from 'react'
import Link from 'next/link'
import LogoSVG from '@public/images/slatam-logo.svg'
import Account from './Account'
import AboutUser from './AboutUser'
import { StyledWrapper, StyledCard } from '../styled'
import SignUpStepper from './Stepper'

const stepsItems = [
  passedProps => <Account {...passedProps} />,
  passedProps => <AboutUser {...passedProps} />,
]

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    country: '',
    city: '',
    phone: '',
  })

  const maxIndex = stepsItems.length - 1
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState('PREV')

  const handleNext = () => {
    setDirection('NEXT')
    if (activeIndex + 1 > maxIndex) return
    setActiveIndex(activeIndex + 1)
  }

  const handleStepper = () => {}

  const handleChange = name => event =>
    setFormValues({ ...formValues, [name]: event.target.value })

  const togglePassword = () =>
    setFormValues({ ...formValues, showPassword: !formValues.showPassword })

  const onSubmit = (e, redirectTo) => {
    e.preventDefault()
    if (redirectTo) return // TODO: handle redirection
    handleNext()
  }

  return (
    <StyledWrapper>
      <div className="Logo">
        <Link href="">
          <a>
            <LogoSVG />
          </a>
        </Link>
      </div>
      <StyledCard>
        <SignUpStepper />
        <div className="StyledCard__divider" />
        {stepsItems[activeIndex]({
          formValues,
          handleChange,
          togglePassword,
          onSubmit,
        })}
      </StyledCard>
      <p className="UnderText">
        By creating an account you agree to our{' '}
        <Link href="/">
          <a>Terms and Conditions</a>
        </Link>
      </p>
    </StyledWrapper>
  )
}

export default SignUp
