import React from 'react'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import RightBar from '../components/RightBar'
import MiddleSection from '../components/MiddleSection'
import LeftBar from '../components/LeftBar'
import { StyledSplit } from "../components/styled/StyledSplit"
import '../styles/Home.css'


export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Categories />
      <StyledSplit>
      <div className="homepage">
        <MiddleSection />
        <RightBar />
      </div>
      </StyledSplit>
    </>
  )
}

