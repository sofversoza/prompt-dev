import React, { useState, useRef } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { db } from "../firebase"
import { doc, updateDoc, arrayUnion, arrayRemove, serverTimestamp } from "firebase/firestore"
import "../styles/Create.css"

export default function Update({ document, setUpdateDoc }) {
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [newTags, setNewTags] = useState("")
  const [tags, setTags] = useState([])
  const tagInput = useRef()
  const navigate = useNavigate()
  const { id } = useParams()

  const handleUpdate = async (e) => {
    e.preventDefault()
    const docRef = doc(db, "prompts", id)
    const updatedDoc = await updateDoc(docRef, {
      title: newTitle,
      body: newDescription,
      tags: tags,
      updated_at: serverTimestamp()
    })
    setUpdateDoc(false)
    // navigate(`/prompts/${id}`)
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
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder={document.title}
          style={{display: 'block'}}
        />
        <textarea 
          type="text"
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          placeholder={document.body}
          style={{display: 'block'}}
        />

        <div className="tags">
          <label>Tags:</label>
            <input 
              type="text" 
              placeholder="Leave blank to keep current tags below"
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
