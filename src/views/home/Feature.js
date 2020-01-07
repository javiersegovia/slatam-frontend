import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledFeature = styled.div`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;

  .Feature__icon {
    width: 45px;
    height: 45px;
  }

  .Feature__description {
    font-weight: 700;
    margin-left: 10px;
    color: ${props => props.theme.palette.primary.main};
  }
`

const Feature = ({ icon, description }) => {
  return (
    <StyledFeature>
      <img className="Feature__icon" src={icon} alt="Feature Icon" />
      <span className="Feature__description">{description}</span>
    </StyledFeature>
  )
}

Feature.propTypes = {
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Feature
