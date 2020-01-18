import React from 'react'
import Header from './Header'
import FeaturesGrid from './FeaturesGrid'
import PopularCategories from './PopularCategories'
import RelatedProducts from './RelatedProducts'
import BestSellers from './BestSellers'
import VerifiedSuppliers from './VerifiedSuppliers'
import StartSelling from './StartSelling'
import Newsletter from './Newsletter'

const Home = () => {
  return (
    <>
      <Header />
      <FeaturesGrid />
      <PopularCategories />
      <RelatedProducts />
      <BestSellers />
      <VerifiedSuppliers />
      <StartSelling />
      <Newsletter />
    </>
  )
}

export default Home
