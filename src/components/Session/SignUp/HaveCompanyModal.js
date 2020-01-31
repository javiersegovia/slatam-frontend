import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import Button from '@components/UI/Button'
import { StyledCard } from '../styled'

const HaveCompanyModal = ({
  isModalOpen = false,
  handleStepper,
  setIsModalOpen,
  onSubmit,
}) => {
  const closeModal = () => setIsModalOpen(false)

  const handleChoice = bool => {
    if (bool) {
      handleStepper(2)
      setIsModalOpen()
    } else {
      handleStepper(3)
      setIsModalOpen()
    }
  }

  return (
    <Dialog open={isModalOpen} onClose={closeModal} PaperComponent={StyledCard}>
      {/* <StyledCard modal> */}
      <h3 className="StyledCard__title">Do you have a company?</h3>
      <div className="StyledCard__inner">
        <p className="StyledModal__description">
          You have to register your company if you want to sell your products
          inside our platform
        </p>
      </div>
      <div className="StyledCard__gridContainer">
        <Button
          type="submit"
          className="StyledCard__submitButton submitModal"
          color="yellow"
          name="account"
          onClick={() => handleChoice(false)}
        >
          No, skip this
        </Button>
        <Button
          type="submit"
          className="StyledCard__submitButton submitModal"
          color="yellow"
          name="account"
          onClick={() => handleChoice(true)}
        >
          Yes, create it now
        </Button>
      </div>
      {/* </StyledCard> */}
    </Dialog>
  )
}

HaveCompanyModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
}

export default HaveCompanyModal
