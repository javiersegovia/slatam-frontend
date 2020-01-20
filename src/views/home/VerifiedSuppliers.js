import React from 'react'
import PropTypes from 'prop-types'
import SuppliersGrid from '@components/Suppliers/SuppliersGrid'
import Container from '@components/UI/Container'
import styled from 'styled-components'
import faker from 'faker'
import SectionTitle from './SectionTitle'

const generatedSuppliers = Array(5)
  .fill(null)
  .map(item => ({
    id: faker.random.uuid(),
    name: faker.company.companyName(),
    country: faker.address.country(),
    countryCode: faker.address.countryCode(),
    image:
      'https://www.graphicsprings.com/filestorage/stencils/45812aa92f4ef67586cb693a60fd5c1f.svg',
    createdAt: faker.date.past(),
  }))

const SectionWrapper = styled.div`
  margin-top: 60px;
`
const VerifiedSuppliers = props => {
  return (
    <SectionWrapper>
      <Container limited>
        <SectionTitle href="/" seeMore="See all suppliers">
          Verified **suppliers**
        </SectionTitle>
        <SuppliersGrid suppliers={generatedSuppliers} />
      </Container>
    </SectionWrapper>
  )
}

VerifiedSuppliers.propTypes = {}

export default VerifiedSuppliers
