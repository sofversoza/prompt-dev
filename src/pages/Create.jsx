import React, { useState, useRef } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuthContext } from "../hooks/useAuthContext"
import StyledHeader from "../components/styled/StyledHeader"
import { StyledSplit } from "../components/styled/StyledSplit"
import "../styles/Create.css"

export default function Create() {
  const [title, setTitle] = useState("")
  const [newPrompt, setNewPrompt] = useState("")
  const [newTags, setNewTags] = useState("")
  const [tags, setTags] = useState([])
  const tagInput = useRef(null)

  const navigate = useNavigate()
  const { user } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const ref = collection(db, "prompts")
    await addDoc(ref, {
      title: title,
      body: newPrompt,
      tags: tags,
      uid: user.uid
    })
    setNewPrompt("")
    navigate("/prompts")
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

  const pageTitle = "Compose"
  const pageDetails = "Lorem ipsum dolor sit amet, consectetur adip. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quas ipsa laborum consectetur qui, temporibus distinctio! Officia, nisi quo quas illo voluptatibus blanditiis iusto cupiditate"

  return (
    <>
      <StyledHeader>
        {pageTitle}
        {pageDetails}
      </StyledHeader>
      <StyledSplit>
        <div className="page-container">
          <form onSubmit={handleSubmit} className="create-form">
            <label>Prompt submission form:</label>
            <input 
              required
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Title"
              style={{display: 'block'}}
            />
            <textarea 
              required
              type="text"
              onChange={(e) => setNewPrompt(e.target.value)}
              value={newPrompt}
              placeholder="Description"
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
            {/* <span>Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor</span> */}
            <p>Current tags: {tags && tags.map((t) => (
              <em key={t}>
                {t},{" "} 
              </em>))}
            </p>
            <div className="btn-cont">
              <button type="submit">Submit</button>
              <button onClick={() => navigate("/")}>Cancel</button>
            </div>
          </form>
        </div>
      </StyledSplit>
    </>
  )
}
