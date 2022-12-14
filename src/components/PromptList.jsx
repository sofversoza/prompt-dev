import React from 'react'
import { MdOutlineSort } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useCollection } from "../hooks/useCollection"
import { useAuthContext } from "../hooks/useAuthContext"
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
                <div className="prompt-tags">
                  {prompt.tags && prompt.tags.map(tag => (
                    <a key={tag}>{tag}</a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </StyledSplit>
    </>
  )
}
