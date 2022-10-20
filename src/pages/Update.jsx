import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { db } from "../firebase"
import { doc, updateDoc, arrayUnion, arrayRemove, serverTimestamp } from "firebase/firestore"
import "../styles/Create.css"

export default function Update({ document, setUpdateDoc }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [newTags, setNewTags] = useState("")
  const [tags, setTags] = useState([])
  const tagInput = useRef()
  const navigate = useNavigate()
  const { id } = useParams()

  // setting new input values to doc's og values
  useEffect(() => {
    setTitle(document.title)
    setDescription(document.body)
    setTags(document.tags)
  }, [])

  const handleUpdate = async (e) => {
    e.preventDefault()
    const docRef = doc(db, "prompts", id)
    await updateDoc(docRef, {
      title: title,
      body: description,
      tags: tags,
      updated_at: serverTimestamp()
    })
    setUpdateDoc(false)
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const tag = newTags.trim()
    // if a user added a tag & that tag doesnt exist yet
    if (tag && !tags.includes(tag)) {
      setTags(prevTags => [...prevTags, tag])
    }
    setNewTags("")
    tagInput.current.focus()
  }

  const handleReset = (e) => {
    e.preventDefault()
    setTags("")
  }
  
  return (
    <div className="page-container">
      <form onSubmit={handleUpdate} className="create-form">
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{display: 'block'}}
        />
        <textarea 
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          style={{display: 'block'}}
        />

        <div className="tags">
          <label>Tags:</label>
            <input 
              type="text" 
              onChange={(e) => setNewTags(e.target.value)}
              value={newTags}
              ref={tagInput}
            />
            <button onClick={handleAdd}>add</button>
            <button onClick={handleReset}>clear tags</button>
        </div>
        <p>Updated tags: {tags && tags.map((t) => (
          <em key={t}>
            {t},{" "} 
          </em>))}
        </p>
        <p>Current tags: {document.tags && document.tags.map((t) => (
          <em key={t}>
            {t},{" "} 
          </em>))}
        </p>
        <div className="btn-cont">
          <button type="submit">Submit</button>
          <button onClick={() => setUpdateDoc(false)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
