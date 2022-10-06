import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSignup } from "../hooks/useSignup"
import "../styles/Forms.css"

function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const { error, loading, signup } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password)
  }

  return (
    <div className="form">
      <div className="container-items">
        <h2>Join prompt.</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <input 
            required
            type='email' 
            placeholder='Email' 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input 
            required
            placeholder='Password' 
            type='password' 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input 
            required
            placeholder='Confirm password' 
            type='password' 
            onChange={(e) => setConfirmPass(e.target.value)}
            value={confirmPass}
          />
          <button type='submit' disabled={loading}>
            Sign up
          </button>
        </form>
        <div>
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup