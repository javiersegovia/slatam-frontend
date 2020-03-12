import React from 'react'
// import PropTypes from 'prop-types'
import Container from '@components/UI/Container'
import styled from 'styled-components'
import faker from 'faker'
import ProductsGrid from '@components/Products/ProductsGrid'
import SectionTitle from './SectionTitle'

const SectionWrapper = styled.div`
  margin-top: 60px;
`

const generatedProducts = Array(12)
  .fill(null)
  .map(() => ({
    id: faker.random.uuid(),
    slug: faker.lorem.slug(),
    title: faker.commerce.productName(),
    minPrice: faker.commerce.price(),
    maxPrice: faker.commerce.price(),
    minimumOrder: Math.floor(Math.random() * 100) + 1,
    countryCode: faker.address.countryCode(),
    image:
      'https://www.ordenadoresgaming.top/wp-content/uploads/2018/02/Pack-PC-completo-gaming.jpg',
    owner: {
      id: faker.random.uuid(),
      name: faker.company.companyName(),
      isVerified: faker.random.boolean(),
      rating: {
        average: Math.random() * 4 + 1,
        numberOfRatings: Math.floor(Math.random() * 200) + 1,
      },
    },
  }))

const RelatedProducts = () => {
  return (
    <SectionWrapper>
      <Container limited>
        <SectionTitle href="/" seeMore="See more">
          Related to your **search**
        </SectionTitle>
        <ProductsGrid products={generatedProducts} />
      </Container>
    </SectionWrapper>
  )
}

RelatedProducts.propTypes = {}

export default RelatedProducts
