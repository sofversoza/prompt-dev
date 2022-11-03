import React, { useState } from 'react'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import RightBar from '../components/RightBar'
import MiddleSection from '../components/MiddleSection'
import { StyledSplit } from "../components/styled/StyledSplit"
import { useCollection } from "../hooks/useCollection"
import '../styles/Home.css'


export default function Home() {
  const { documents: prompts } = useCollection("prompts")
  const allCats = ["All", ...new Set(prompts && prompts.map(p => p.category))]

  return (
    <>
      <Navbar />
      <Header />
      <StyledSplit>
      <div className="homepage">
        <MiddleSection prompts={prompts} allCats={allCats} />
        <RightBar />
      </div>
      </StyledSplit>
    </>
  )
}

