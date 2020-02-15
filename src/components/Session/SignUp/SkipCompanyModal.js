import React from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import Button from '@components/UI/Button'
import { StyledModal } from '../styled'

const HaveCompanyModal = ({ isOpen = false, setIsOpen }) => {
  const closeModal = () => setIsOpen(false)

  const handleChoice = bool => {
    if (bool) {
      Router.push('/')
    } else {
      setIsOpen(false)
    }
  }

  return (
    <Dialog open={isOpen} onClose={closeModal} PaperComponent={StyledModal}>
      <h3 className="StyledModal__title">Are you sure?</h3>
      <p className="StyledModal__description">
        You have to register a company if you want to sell your products inside
        Slatam
      </p>
      <div className="StyledModal__buttonsContainer">
        <Button
          type="submit"
          className="StyledCard__submitButton submitModal"
          color="default"
          name="account"
          onClick={() => handleChoice(false)}
        >
          No, go back
        </Button>
        <Button
          type="submit"
          className="StyledCard__submitButton submitModal"
          name="account"
          onClick={() => handleChoice(true)}
        >
          Yes, skip this
        </Button>
      </div>
    </Dialog>
  )
}

HaveCompanyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
}

export default HaveCompanyModal
