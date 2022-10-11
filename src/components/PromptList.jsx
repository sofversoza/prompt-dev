import React from 'react'
import { BsSortDownAlt, BsSortUpAlt } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"
import { useCollection } from "../hooks/useCollection"
import { useAuthContext } from "../hooks/useAuthContext"
import { db } from "../firebase"
import { doc, deleteDoc } from "firebase/firestore"
import StyledHeader from "./styled/StyledHeader"
import { StyledSplit } from "../components/styled/StyledSplit"
import "../styles/PromptsList.css"


export default function PromptList() {
  const { user } = useAuthContext()
  const { documents: prompts } = useCollection(
    "prompts",
    ["uid", "==", user.uid]
  )
  const navigate = useNavigate()

  const handleDelete = async (id) => {
    const docRef = doc(db, "prompts", id)
    await deleteDoc(docRef)
  }

  const pageTitle = "Prompt Submissions"
  const pageDetails = "Lorem ipsum dolor sit amet, consectetur adip. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quas ipsa laborum consectetur qui, temporibus distinctio! Officia, nisi quo quas illo voluptatibus blanditiis iusto cupiditate"

  return (
    <>
      <StyledHeader>
        {pageTitle}
        {pageDetails}
      </StyledHeader>
      <StyledSplit>
        <div className="prompt-cont">
          <div className="options">
            <BsSortDownAlt className="react-icons"/>
            <BsSortUpAlt className="react-icons" />
          </div>
          {prompts && prompts.map(prompt => (
            <div 
              key={prompt.id} 
              className="prompt-card"
              onClick={() => navigate(`${prompt.id}`)}
            >
              <h4 className="prompt-title">{prompt.title}</h4>
              <p className="prompt-body">{prompt.body.substring(0, 500)}...</p>
              <span>Category: Fiction</span>
              <div className="prompt-tags">
                <span>Tags:</span>
                {prompt.tags && prompt.tags.map(tag => (
                  <a key={tag}>{tag}</a>
                ))}
              </div>
              {/* <p onClick={() => handleDelete(prompt.id)}>Delete</p> */}
            </div>
          ))}
        </div>
      </StyledSplit>
    </>
  )
}
