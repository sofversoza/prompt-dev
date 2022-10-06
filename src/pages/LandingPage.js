import React from 'react'
import { Link } from 'react-router-dom'
import { HiUsers } from "react-icons/hi"
import '../styles/Landing.css'

export default function LandingPage() {


  return (
    <div className="landing">
      <h1>Welcome to <span>prompt.</span></h1>
      <Link to="/login">Login</Link>
      <Link to="/signup">Join prompt. <HiUsers style={{ marginLeft: 2 }}/></Link>
    </div>
  )
}
