import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NavBar from '@components/Layout/Navbar'
import Footer from '@components/Layout/Footer'
import SingleProduct from '@views/p'

const SingleProductPage = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <>
      <Head>
        <title>Slatam | Product</title>
      </Head>
      <NavBar>
        <SingleProduct slug={slug} />
        <Footer />
      </NavBar>
    </>
  )
}

export default SingleProductPage
