import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

// if there's no current user, we'll be redirected to the login page
// no access to the dashboard unless a user is logged in

export default function PrivateRoute({ component: Component, ...rest}) {

  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    >
    </Route>
  )
}
