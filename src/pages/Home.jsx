import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import PromptList from '../components/PromptList'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import RightBar from '../components/RightBar'
import LeftBar from '../components/LeftBar'
import '../styles/Home.css'
import All from '../components/category/All'

function Home() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    const promptRef = (collection(db, "poems"))

    getDocs(promptRef).then((snapshot) => {
      if (snapshot.empty) {
        setError("No prompts to load")
        setIsPending(false)
      } else {
        let results = []
        snapshot.forEach((doc) => {
          // console.log(doc.id, doc.data())
          results.push({...doc.data(), id: doc.id})
        })
        setData(results)
        setIsPending(false)
      }
    }).catch(err => {
      setError(err.message)
      setIsPending(false)
    })
  }, [])

  return (
    <>
      <Navbar />
      <Header />
      <Categories />
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && (
        <div className="homepage">
          <LeftBar />
          <All prompts={data} />
          <RightBar />
        </div>
      )}
    </>
  )
}

export default Home