import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import Button from '@components/UI/Button'
import { StyledModal } from '../styled'

const HaveCompanyModal = ({ isOpen = false, setIsOpen, handleNext }) => {
  const closeModal = () => setIsOpen(false)

  return (
    <Dialog open={isOpen} onClose={closeModal} PaperComponent={StyledModal}>
      <h3 className="StyledModal__title">Are you sure?</h3>
      <p className="StyledModal__description">
        You have to register a company if you want to sell your products inside
        Slatam
      </p>
      <div className="StyledModal__buttonsContainer">
        <Button
          type="button"
          className="StyledCard__submitButton submitModal"
          color="default"
          onClick={() => setIsOpen(false)}
        >
          No, create company
        </Button>
        <Button
          type="button"
          className="StyledCard__submitButton submitModal"
          onClick={handleNext}
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
