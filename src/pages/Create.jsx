import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuthContext } from "../hooks/useAuthContext"
import StyledHeader from "../components/styled/StyledHeader"
import { StyledSplit } from "../components/styled/StyledSplit"
import "../styles/Create.css"

export default function Create() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("Poem")
  const [newTags, setNewTags] = useState("")
  const [tags, setTags] = useState([])
  const tagInput = useRef(null)
  const navigate = useNavigate()
  const { user } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const ref = collection(db, "prompts")
    const newP = await addDoc(ref, {
      title: title,
      body: description,
      category: category,
      tags: tags,
      uid: user.uid,
      created_at: Timestamp.fromDate(new Date())
    })
    navigate(`/prompts/${newP.id}`)
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

  const handleChange = (e) => {
    const selectedCategory = e.target.value
    setCategory(selectedCategory)
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
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="Description"
              style={{display: 'block'}}
            />
            <div className="select-cont">
              <p>Select category:</p>
              <select value={category} onChange={handleChange}>
                <option value="poem">Poem</option>
                <option value="loveletter">Love Letter</option>
                <option value="persuasive">Persuasive</option>
                <option value="expository">Expository</option>
                <option value="narrative">Narrative</option>
                <option value="literary">Literary Analysis</option>
              </select>
            </div>
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
