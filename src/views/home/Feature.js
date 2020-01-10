import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledFeature = styled.div`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;

  ${props => props.theme.breakpoints.down('md')} {
    padding: 15px 30px;
    justify-content: flex-start;
  }

  ${props => props.theme.breakpoints.down('xs')} {
    padding: 15px;
  }

  .Feature__icon {
    width: 45px;
    height: 45px;
  }

  .Feature__description {
    font-weight: 700;
    margin-left: 10px;
    color: ${props => props.theme.palette.primary.main};
  }

  ${props => props.theme.breakpoints.down('xs')} {
    font-size: 0.8125rem;
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
