import { createContext, useContext, useState, useEffect, useReducer } from "react"
import { auth } from '../firebase'
import {
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword
} from "firebase/auth"

const AuthContext = createContext()

// this function will allow us to use all the context below
export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

  function changeEmail(email) {
    return updateEmail(auth.currentUser, email)
  }

  function changePassword(password) {
    return updatePassword(auth.currentUser, password)
  }

  // we only want onAuthStateChanged to run once so we'll use useEffect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    // signup,
    // login,
    // logout,
    resetPassword,
    changeEmail,
    changePassword
  }
  
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}