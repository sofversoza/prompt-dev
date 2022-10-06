import React from 'react'
import { Link } from "react-router-dom"
import { useCollection } from "../hooks/useCollection"
import { useAuthContext } from "../hooks/useAuthContext"
import { db } from "../firebase"
import { doc, deleteDoc } from "firebase/firestore"
import StyledHeader from "./styled/StyledHeader"
import "../styles/PromptPage.css"


export default function PromptList() {
  const { user } = useAuthContext()
  const { documents: prompts } = useCollection(
    "prompts",
    ["uid", "==", user.uid]
  )

  const handleDelete = async (id) => {
    const docRef = doc(db, "prompts", id)
    await deleteDoc(docRef)
  }

  return (
    <>
      <StyledHeader>
        Prompts
      </StyledHeader>
      <div className="prompt-cont">
        {prompts && prompts.map(prompt => (
          <div 
            key={prompt.id} 
            className="prompt-card"
            // onClick={() => console.log(prompt.id)}
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
            <Link to={`${prompt.id}`}>View</Link> 
          </div>
        ))}
      </div>
    </>
  )
}
