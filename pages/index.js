import React from 'react'
import Home from '@views/home'
import NavBar from '@components/Layout/Navbar'
import Footer from '@components/Layout/Footer'

const HomePage = () => (
  <>
    <NavBar>
      <Home />
      <Footer />
    </NavBar>
  </>
)

export default HomePage
