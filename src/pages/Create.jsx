import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'
import StyledHeader, { StyledTitle } from "../components/styled/StyledHeader"
import "../styles/PageTemplate.css"

export default function Create() {
  const [newPrompt, setNewPrompt] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const ref = collection(db, "prompts")

    await addDoc(ref, {
      body: newPrompt
    })

    setNewPrompt("")
    navigate("/prompts")
  }

  return (
    <>
      <StyledHeader>
        <StyledTitle>Compose</StyledTitle>
      </StyledHeader>
      <div className="page-container">
        <form onSubmit={handleSubmit}>
          <label>
            <span>prompt submission:</span>
            <textarea 
              required
              type="text"
              onChange={(e) => setNewPrompt(e.target.value)}
              value={newPrompt}
            />
          </label>
          <button>Add</button>
        </form>
      </div>
    </>
  )
}
