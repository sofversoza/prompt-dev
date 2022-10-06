import React, { useState, useEffect } from 'react'
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase'
import Prompt from '../../pages/Prompt'

export default function All({ prompts }) {
  const navigate = useNavigate()

  return (
    <div className="middle">
      {prompts.map(prompt => (
        <div key={prompt.id} className="card">
          <h4>{prompt.title}</h4>
          <div>{prompt.description.substring(0, 100)}...</div>
          <span>{prompt.tags}</span>
          {/* <Link to="/prompts/:id">View prompt</Link> */}
          {/* <button onClick={() => navigate("/prompts/:id")}>View Prompt</button> */}
        </div>
      ))}
    </div>
  )
}
