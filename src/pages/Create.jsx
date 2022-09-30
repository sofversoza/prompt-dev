import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import { collection, getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'
import Navbar from '../components/Navbar'
import "../styles/PromptPage.css"

export default function Create() {
  const { id } = useParams()

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    const promptRef = doc(db, "poems", id)

    getDoc(promptRef).then((doc) => {
      console.log(doc)
    }) 

  }, [])


  return (
    <>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && (
        <>
          <Navbar />
          <div> 
            <Link to="/">Back to Home</Link>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <h1>Compose</h1>
            <hr />
          </div>
        </>
      )}

    </>
  )
}
