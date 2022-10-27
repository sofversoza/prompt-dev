import React from 'react'
import { useNavigate } from "react-router-dom"
import { useCollection } from "../hooks/useCollection"
import "../styles/MiddleSection.css"

export default function MiddleSection() {
  const navigate = useNavigate()
  const categories = ["Poem", "Love Letter", "Persuasive", "Expository", "Narrative", "Literary Analysis"]

  const { documents: prompts } = useCollection(
    "prompts",
    ["category", "==", "Poem"]
  )

  return (
    <div className="ms-container">
      <div className="category-links">
        {categories.map(c => (
          <ul key={c}>
            <li>{c}</li>
          </ul>
        ))}
      </div>
      <div className="ms-prompts">
        {prompts && prompts.map(prompt => (
          <div
            key={prompt.id}
            className="prompt-box"
            onClick={() => navigate(`prompts/${prompt.id}`)}
          >
            <div className="info">
              <p>Sofia Versoza</p>
              <span>·</span>
              <p>{prompt.created_at && prompt.created_at.toDate().toDateString()}</p> 
            </div>
            <h5>{prompt.title}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}
