import React, { useRef, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    
    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError('Failed to reset password')
    }

    setLoading(false)
  }

  return (
    <div className="form">
      <div className="container-items">
        <h2 className="text-center mb-4">Reset your password</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <form onSubmit={handleSubmit}>
        <input 
          placeholder='Email' 
          type='email' 
          name='email'
          ref={emailRef} 
          required
        />
        <button
          disabled={loading}
          type='submit'
        >
          Reset Password
        </button>
        </form>
        <div>
          <Link to="/login">Back to Login</Link>
        </div>
        <div>
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword