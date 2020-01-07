import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import FeaturesGrid from './FeaturesGrid'
import PopularCategories from './PopularCategories'
import ProductsGrid from './RelatedProducts'

const Home = props => {
  return (
    <>
      <Header />
      <FeaturesGrid />
      <PopularCategories />
      <ProductsGrid />
    </>
  )
}

Home.propTypes = {}

export default Home
