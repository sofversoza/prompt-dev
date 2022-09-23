import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import '../styles/Forms.css'

function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    // if all of our promises finish ^^ then this will run
    Promise.all(promises).then(() => {
      navigate("/")
    })
    .catch(() => {
      setError("Failed to update account")
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          placeholder='Email' 
          type='email' 
          name='email'
          ref={emailRef} 
          required
          defaultValue={currentUser.email}
        />
        <label>Password</label>
        <input 
          placeholder="Leave blank to keep the same" 
          type='password' 
          name='password'
          ref={passwordRef} 
        />
        <label>Confirm Password</label>
        <input 
          placeholder="Leave blank to keep the same" 
          type='password' 
          name='password-confirm'
          ref={passwordConfirmRef} 
        />
        <button disabled={loading} type='submit'>
          Update
        </button>
        <button onClick={navigate("/")}>
          Cancel
        </button>
      </form>
    </>
  )
}

export default UpdateProfile