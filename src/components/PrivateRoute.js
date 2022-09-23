import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

// if there's no current user, we'll be redirected to the login page
// no access to the dashboard unless a user is logged in
export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth()
  return currentUser ? children : <Navigate to="/landing-page" />
}
