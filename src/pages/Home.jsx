import React from 'react'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import RightBar from '../components/RightBar'
import MiddleSection from '../components/MiddleSection'
import LeftBar from '../components/LeftBar'
import '../styles/Home.css'


export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Categories />
      <div className="homepage">
        <LeftBar />
        <MiddleSection />
        <RightBar />
      </div>
    </>
  )
}

