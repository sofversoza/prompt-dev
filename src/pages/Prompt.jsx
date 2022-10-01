import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"

export default function Prompt() {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    const docRef = doc(db, "prompts", id)
    const docSnap = getDoc(docRef).then((snapshot) => {
      console.log(snapshot)
    })
  }, [])

  return (
    <div className="promptCont">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && (
        <>
          <h4>{data.title}</h4>
          <p>{data.description}</p>
          <ul>
            {data.tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
        </>
      )}
    </div>
    // <><h1>Hi</h1></>
  )
}
