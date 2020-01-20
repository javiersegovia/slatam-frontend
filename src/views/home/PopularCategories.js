import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from '@components/UI/Container'
import SectionTitle from './SectionTitle'

const SectionWrapper = styled.div`
  margin-top: 60px;
`

const PopularCategories = props => {
  return (
    <SectionWrapper>
      <Container limited>
        <SectionTitle href="/" seeMore="See all categories">
          Popular **categories**
        </SectionTitle>
        <h5>Categories grid should be here soon...</h5>
      </Container>
    </SectionWrapper>
  )
}

PopularCategories.propTypes = {}

export default PopularCategories
