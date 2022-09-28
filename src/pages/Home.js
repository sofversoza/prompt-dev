import React, { useState } from 'react'
import SplitScreen from "../components/styled/SplitScreen.style"
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
        <SplitScreen>
          <LeftBar />
          <RightBar />
        </SplitScreen>
      </div>
    </>
  )
}

export default Home