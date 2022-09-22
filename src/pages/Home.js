import React, { useState } from 'react'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import RightBar from '../components/RightBar'
import LeftBar from '../components/LeftBar'
import '../styles/Home.css'

function Home() {

  return (
    <>
      <Navbar />
      <Header />
      <Categories />
      <div className="homepage">
        <LeftBar />
        <RightBar />
      </div>
    </>
  )
}

export default Home