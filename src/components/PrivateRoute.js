import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

// if there's no current user, we'll be redirected to the login page
// no access to the dashboard unless a user is logged in

// export default function PrivateRoute({ component: Component, ...rest}) {
//   const { currentUser } = useAuth()
//   return (
//     <Route
//       {...rest}
//       render={props => {
//         return currentUser ? <Component {...props} /> : <Navigate to="/login" />
//       }}
//     >
//     </Route>
//   )
// }

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth()
  return currentUser ? children : <Navigate to="/login" />
}
