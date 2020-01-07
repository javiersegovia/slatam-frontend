import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from '@components/UI/Container'
import Feature from './Feature'

const features = [
  {
    icon: '/images/icon-test.svg',
    description: 'Vende tus productos al mayor',
  },
  {
    icon: '/images/icon-test.svg',
    description: 'Soporte pre-venta y post-venta',
  },
  {
    icon: '/images/icon-test.svg',
    description: 'Expande tu negocio',
  },
  {
    icon: '/images/icon-test.svg',
    description: 'Abastece tu negocio',
  },
]

const StyledFeatures = styled.div`
  margin-top: 60px;
  .Features__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    box-shadow: ${props => props.theme.bShadows.searchBar};
    border-radius: 4px;
    overflow: hidden;
  }
`

const FeaturesGrid = props => {
  return (
    <StyledFeatures>
      <Container limited>
        <div className="Features__grid">
          {features.map(feature => (
            <Feature
              key={feature.description}
              {...{ description: feature.description, icon: feature.icon }}
            />
          ))}
        </div>
      </Container>
    </StyledFeatures>
  )
}

FeaturesGrid.propTypes = {}

export default FeaturesGrid
