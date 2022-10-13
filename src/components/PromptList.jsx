import React from 'react'
import { BsSortDownAlt } from "react-icons/bs"
import { MdOutlineSort } from "react-icons/md"
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
            <MdOutlineSort className="icon" />
            <h5>SORT BY</h5>
          </div>
          {prompts && prompts.map(prompt => (
            <div 
              key={prompt.id} 
              className="prompt-card"
              onClick={() => navigate(`${prompt.id}`)}
            >
              <div className="user-info">
                <p>Sofia</p>
                <span>·</span>
                <p>@denisezola</p>
                <span>·</span>
                <p>{prompt.created_at && prompt.created_at.toDate().toDateString()}</p> 
              </div>

              <h4 className="prompt-title">{prompt.title}</h4>
              <p className="prompt-text">{prompt.body.substring(0, 500)}...</p>
              <br />
              
              <div className="prompt-info">
                <p>Category: Fiction</p>
                <div className="prompt-tags">
                  <p>Tags:</p>
                  {prompt.tags && prompt.tags.map(tag => (
                    <a key={tag}>{tag}</a>
                  ))}
                </div>
              </div>
              {/* <p onClick={() => handleDelete(prompt.id)}>Delete</p> */}
            </div>
          ))}
        </div>
      </StyledSplit>
    </>
  )
}
