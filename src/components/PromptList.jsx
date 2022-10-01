import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"
import Navbar from './Navbar'

export default function PromptList() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    const promptRef = (collection(db, "prompts"))

    getDocs(promptRef).then((snapshot) => {
      if (snapshot.empty) {
        setError("No prompts to load")
        setIsPending(false)
      } else {
        let results = []
        snapshot.forEach((doc) => {
          // console.log(doc.id, doc.data())
          results.push({id: doc.id, ...doc.data()})
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
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && (
        <>
          <h4>{data.title}</h4>
          <p>{data.description}</p>
          {/* <ul>
            {data.tags.map((tag)=> <li key={tag}>{tag}</li>)}
          </ul> */}
        </>
      )}
    </>
  )
}
