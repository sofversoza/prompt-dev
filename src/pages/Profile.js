import React, { useRef, useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/OldAuthContext'
import '../styles/Profile.css'

export default function Profile() {
  const [error, setError] = useState('')
  const { currentUser } = useAuth()

  return (
    <div className="profile">
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
    </div>
  )
}
