import React from 'react'
import { useCollection } from "../hooks/useCollection"
import Categories from '../components/Categories'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import RightBar from '../components/RightBar'
import LeftBar from '../components/LeftBar'
import All from '../components/category/All'
import '../styles/Home.css'

function Home() {
  const { documents: poems } = useCollection("poems")

  return (
    <>
      <Navbar />
      <Header />
      <Categories />
      {poems && (
        <div className="homepage">
          <LeftBar />
          <All prompts={poems} />
          <RightBar />
        </div>
      )}
    </>
  )
}

export default Home