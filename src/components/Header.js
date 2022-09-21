import React from 'react'
import '../styles/Home.css'

export default function Header() {
  return (
    <div className="header">
      <div className="border-head">
        <hr/>
        <h3>We'll provide the</h3> 
        <hr/>
      </div>
      <div className="center-head">
        <h1>Prompt</h1>
      </div>
      <div className="border-head">
        <hr/>
        <h3>You'll provide the words</h3> 
        <hr/>
      </div>
    </div>
  )
}
