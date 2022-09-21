import React from 'react'
import '../styles/Home.css'

export default function Categories() {
  const links = ['For you', 'Gratitude','Poems', 'Photos', 'Plays', 'Love Letter', 'Literary Analysis', 'Persuasive', 'Expository', 'Narrative' ]

  return (
    <div className="category-links">
      {links.map(l => (
        <ul key={l}>
          <li>{l}</li>
        </ul>
      ))}
    </div>
  )
}
