import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useLogin } from "../hooks/useLogin"
import "../styles/Forms.css"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { error, loading, login } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <div className="form">
      <div className="container-items">
        <h2>Login to prompt.</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <input 
            required
            placeholder='Email address' 
            type='email' 
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
          <button type='submit' disabled={loading}>
            Log in
          </button>
        </form>
        <div>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div>
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}
