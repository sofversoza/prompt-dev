import React from 'react'
import { Link, useParams } from "react-router-dom"
import { useCollection } from "../hooks/useCollection"
import { db } from "../firebase"
import { doc, deleteDoc } from "firebase/firestore"
import Prompt from '../pages/Prompt'
import StyledHeader, { StyledTitle } from "./styled/StyledHeader"
import "../styles/PromptPage.css"


export default function PromptList() {
  const { documents: prompts } = useCollection("prompts")
  let { id } = useParams()

  const handleDelete = async (id) => {
    const docRef = doc(db, "prompts", id)
    await deleteDoc(docRef)
    // await deleteDoc(doc(db, "prompts", id))
  }

  return (
    <>
      <StyledHeader>
        <StyledTitle>Prompts</StyledTitle>
      </StyledHeader>
      <div className="prompt-cont">
        {prompts && prompts.map(prompt => (
          <div 
            key={prompt.id} 
            className="prompt-card"
            onClick={() => console.log(prompt.id)}
          >
            <h4 className="prompt-title">{prompt.title}</h4>
            <p className="prompt-body">{prompt.body.substring(0, 100)}...</p>
            <div className="prompt-tags">
              <span>Tags:</span>
              {prompt.tags && prompt.tags.map(tag => (
                <a key={tag}>{tag}</a>
              ))}
            </div>
            <p onClick={() => handleDelete(prompt.id)}>Delete</p>
            <Link to=":id">View</Link>
          </div>
        ))}
      </div>
    </>
  )
}
