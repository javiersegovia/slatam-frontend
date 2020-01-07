import React from 'react'
import PropTypes from 'prop-types'
import Container from '@components/UI/Container'
import styled from 'styled-components'
import faker from 'faker'
import ProductsGrid from '@components/Products/ProductsGrid'
import SectionTitle from './SectionTitle'

const SectionWrapper = styled.div`
  margin-top: 60px;
`
// id: ID! @id
// title: String!
// description: String!
// sku: String
// image: [ItemImage]! @relation(onDelete: CASCADE)
// price: Int!
// owner: Company!
// status: ItemStatus! @default(value: PRIVATE)
// createdAt: DateTime! @createdAt
// updatedAt: DateTime! @updatedAt

const generatedProducts = Array(40)
  .fill(null)
  .map(item => ({
    id: faker.random.uuid(),
    title: faker.commerce.productName(),
    minPrice: faker.commerce.price(),
    maxPrice: faker.commerce.price(),
    minimumOrder: Math.floor(Math.random() * 100) + 1,
    countryCode: faker.address.countryCode(),
    image: faker.image.imageUrl(),
    owner: {
      name: faker.company.companyName(),
      isVerified: faker.random.boolean(),
    },
  }))

const RelatedProducts = props => {
  return (
    <SectionWrapper>
      <Container limited>
        <SectionTitle href="/" seeMore="See more">
          Related to your **search history**
        </SectionTitle>
        <ProductsGrid products={generatedProducts} />
      </Container>
    </SectionWrapper>
  )
}

RelatedProducts.propTypes = {}

export default RelatedProducts
