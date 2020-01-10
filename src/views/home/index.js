import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import FeaturesGrid from './FeaturesGrid'
import PopularCategories from './PopularCategories'
import RelatedProducts from './RelatedProducts'
import BestSellers from './BestSellers'
import VerifiedSuppliers from './VerifiedSuppliers'
import StartSelling from './StartSelling'

const Home = props => {
  return (
    <>
      <Header />
      <FeaturesGrid />
      <PopularCategories />
      <RelatedProducts />
      <BestSellers />
      <VerifiedSuppliers />
      <StartSelling />
    </>
  )
}

Home.propTypes = {}

export default Home
