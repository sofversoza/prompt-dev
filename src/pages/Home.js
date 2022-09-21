import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useAuth } from '../contexts/AuthContext'
import '../styles/Home.css'

function Home() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")
    try {
      await logout()
      navigate("/landing-page")
    } catch {
      setError("Failed to Log Out")
    }
  }

  return (
    <>
      <Navbar />
      <Header />
      <Categories />
      <div className="homepage">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              Update Profile
            </Link>
          </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
          <Button variant="link" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </div>
    </>
  )
}

export default Home