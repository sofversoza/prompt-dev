import { createContext, useReducer, useEffect } from "react"
import { auth } from '../firebase'
import { onAuthStateChanged } from "firebase/auth"

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload }
    case "LOGOUT":
      return { ...state, user: null }
    case "AUTH_IS_READY":
      return { user: action.payload, authIsReady: true }
    default:
      return state    
  }
}

// the children is the root component which is the App component. Meaning this function will wrap our whole Application and provide our global state including the user.
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false
  })

  // fires right away to check if the user is already logged in or not
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      // the user in (payload: user) will either be the logged in user or null
      dispatch({ type: "AUTH_IS_READY", payload: user })

      // we unsubscribe from changes so this function doesn't fire again when there's Auth state change
      unsub()
    })
  }, [])

  // console.log("AuthContext state:", state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )
}



