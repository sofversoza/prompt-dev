import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuthContext } from "../hooks/useAuthContext"
import StyledHeader from "../components/styled/StyledHeader"
import "../styles/Create.css"

export default function Create() {
  const [title, setTitle] = useState("")
  const [newPrompt, setNewPrompt] = useState("")

  const navigate = useNavigate()
  const { user } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const ref = collection(db, "prompts")
    await addDoc(ref, {
      title: title,
      body: newPrompt,
      uid: user.uid
    })
    setNewPrompt("")
    navigate("/prompts")
  }

  return (
    <>
      <StyledHeader>
        Compose
      </StyledHeader>
      <div className="page-container">
        <form onSubmit={handleSubmit} className="create-form">
          <label>Prompt submission:</label>
          <input 
            required
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            style={{display: 'block'}}
          />
          <textarea 
            required
            type="text"
            onChange={(e) => setNewPrompt(e.target.value)}
            value={newPrompt}
            style={{display: 'block'}}
          />
          <button>Submit</button>
          <button onClick={() => navigate("/")}>Cancel</button>
        </form>
      </div>
    </>
  )
}
