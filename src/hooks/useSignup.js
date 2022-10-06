import { useState } from "react"
import { auth } from "../firebase"
import { useAuthContext } from "../hooks/useAuthContext"
import { createUserWithEmailAndPassword } from "firebase/auth"

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { dispatch } = useAuthContext()

  // we'll return this function from inside this hook to use in diff comps
  const signup = (email, password) => {
    setError(null)
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // console.log("user signed up:", res.user)
        dispatch({ type: "LOGIN", payload: res.user })
      })
      .catch((err) => {
        setError(err.message)
      })
    setLoading(false)  
  }

  // these are what we can grab from diff comps to use this hook
  return { error, loading, signup}
}