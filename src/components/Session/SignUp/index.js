import React, { useState } from 'react'
import Link from 'next/link'
import LogoSVG from '@public/images/slatam-logo.svg'
import Account from './Account'
import AboutUser from './AboutUser'
import Company from './Company'
import Completed from './Completed'
import { StyledWrapper, StyledCard } from '../styled'
import SignUpStepper from './SignUpStepper'
import HaveCompanyModal from './SkipCompanyModal'

const stepsItems = [
  passedProps => <Account {...passedProps} />,
  passedProps => <AboutUser {...passedProps} />,
  passedProps => <Company {...passedProps} />,
  passedProps => <Completed {...passedProps} />,
]

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    firstName: '',
    lastName: '',
    country: '',
    state: '',
    phone: '',
    companyName: '',
    companyCountry: '',
    companyState: '',
    companyEmployees: '',
    companyCategories: '',
    role: '',
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [completedSteps, setCompletedSteps] = useState({
    account: false,
    aboutUser: false,
    haveCompany: false,
    company: false,
    userInterest: false,
  })

  const maxIndex = stepsItems.length - 1
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState('PREV')

  const handleNext = () => {
    setDirection('NEXT')
    if (activeIndex + 1 > maxIndex) return
    setActiveIndex(activeIndex + 1)
  }

  const handleStepper = newIndex => {
    setActiveIndex(newIndex)
  }

  const handleUpdate = name => value => {
    setFormValues({ ...formValues, [name]: value })
  }

  const togglePassword = () =>
    setFormValues({ ...formValues, showPassword: !formValues.showPassword })

  const onSubmit = e => {
    e.preventDefault()
    const { name } = e.target
    setCompletedSteps({
      ...completedSteps,
      [name]: true,
    })

    // if (name === 'aboutUser') {
    //   setIsModalOpen(true)
    //   return
    // }

    // if (redirectTo) return // TODO: handle redirection
    handleNext()
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
        {/* <SignUpStepper
          activeIndex={activeIndex}
          handleStepper={handleStepper}
        /> */}
        {/* <div className="StyledCard__divider" /> */}
        {stepsItems[activeIndex]({
          formValues,
          handleUpdate,
          handleStepper,
          togglePassword,
          onSubmit,
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
      <HaveCompanyModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleStepper={handleStepper}
      />
    </StyledWrapper>
  )
}

export default SignUp
