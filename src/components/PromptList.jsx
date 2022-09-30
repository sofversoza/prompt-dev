import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function PromptList({ prompts }) {
  if (prompts.length === 0) {
    return <div className="error">No prompts to load...</div>
  }

  const allPrompts = prompts.map((prompt) => {
    return (
      <div key={prompt.id}>
        <h3>{prompt.title}</h3>
        <p>{prompt.description.substring(0, 100)}...</p>
        <span>{prompt.tags}</span>
        <Link to={`/prompts/${prompt.id}`}>Use Prompt</Link>
      </div>
    )
  })

  return (
    <>
      <Navbar />
      <div>
        <Link>Back to Home</Link>
        <h1>All Prompts</h1>
        <hr />
        {allPrompts}
      </div>
    </>
  )
}
