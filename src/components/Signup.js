import React, { useRef, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import "../styles/Forms.css"

function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError('Failed to create an account')
    }

    setLoading(false)
  }

  return (
    <div className="form-container">
      <h2>Join prompt.</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <input 
          placeholder='Email' 
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
        <input 
          placeholder='Confirm password' 
          type='password' 
          name='password-confirm'
          ref={passwordConfirmRef} 
          required
        />
        <button type='submit' disabled={loading}>
          Sign up
        </button>
			</form>
      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  )
}

export default Signup