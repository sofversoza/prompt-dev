import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import "../styles/MiddleSection.css"
import "../styles/PromptsList.css"

export default function MiddleSection({ prompts, allCats }) {
  const [filteredPrompts, setFilteredPrompts] = useState(prompts)
  const navigate = useNavigate()

  const filter = (button) => {
    if (button === "All") {
      setFilteredPrompts(prompts)
      return
    }
    const selectedCategory = prompts.filter(prompt => prompt.category === button)
    setFilteredPrompts(selectedCategory)
  }

  return (
    <div className="ms-container">
      <div className="category-links">
        {/* <button type="button" onClick={() => filter("Poem")}>Poem</button> */}
        {allCats.map((cat, i) => {
          return (
            <button 
              key={i} 
              type="button" 
              className="btn-category"
              onClick={() => filter(cat)}
            >
              {cat}
            </button>
          )
        })}
      </div>

      <div className="ms-prompts">
        {!filteredPrompts ? prompts && prompts.map(prompt => (
          <div
            key={prompt.id}
            className="prompt-card"
            onClick={() => navigate(`prompts/${prompt.id}`)}
          >
            <div className="user-info">
              <p>Sofia Versoza</p>
              <span>·</span>
              <p>{prompt.created_at && prompt.created_at.toDate().toDateString()}</p> 
            </div>
            <h4 className="prompt-title">{prompt.title}</h4>
            <p className="prompt-text">{prompt.body.substring(0, 100)}...</p>

            <div className="prompt-info" style={{ marginTop: "2%" }}>
              <div className="prompt-tags">
                {prompt.tags && prompt.tags.map(tag => (
                  <a key={tag}>{tag}</a>
                ))}
              </div>
            </div>
          </div>
          
        )) : filteredPrompts && filteredPrompts.map(prompt => (
          <div
            key={prompt.id}
            className="prompt-card"
            onClick={() => navigate(`prompts/${prompt.id}`)}
          >
            <div className="user-info">
              <p>Sofia Versoza</p>
              <span>·</span>
              <p>{prompt.created_at && prompt.created_at.toDate().toDateString()}</p> 
            </div>
            <h4 className="prompt-title">{prompt.title}</h4>
            <p className="prompt-text">{prompt.body.substring(0, 100)}...</p>

            <div className="prompt-info" style={{ marginTop: "2%" }}>
              <div className="prompt-tags">
                {prompt.tags && prompt.tags.map(tag => (
                  <a key={tag}>{tag}</a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
