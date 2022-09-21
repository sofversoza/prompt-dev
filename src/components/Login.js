import React, { useRef, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import "../styles/Forms.css"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    
    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError('Failed to sign in')
    }

    setLoading(false)
  }

  return (
    <div className="form">
      <div className="container-items">
        <h2>Login to prompt.</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <input 
            placeholder='Email address' 
            type='email' 
            name='email'
            ref={emailRef} 
            required
          />
          <input 
            placeholder='Password' 
            type='password' 
            name='password'
            ref={passwordRef} 
            required
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
