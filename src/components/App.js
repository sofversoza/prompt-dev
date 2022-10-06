import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from "../hooks/useAuthContext"
import Home from "../pages/Home"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Login from "./Login"
import Signup from "./Signup"
import LandingPage from "../pages/LandingPage"
import Profile from "../pages/Profile"
import Settings from "../pages/Settings"
import Create from "../pages/Create"
import Read from "./PromptList"
import PromptList from './PromptList'
import Prompt from '../pages/Prompt'
import Navbar from './Navbar'

function App() {
  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={user ? <Home /> : <LandingPage />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/forgot-password" element={user && <ForgotPassword />} />
            <Route path="/update-profile" element={user && <UpdateProfile />} />
            <Route path="/profile" element={user && <Profile />} />
            <Route path="/settings" element={user && <Settings />} />
            <Route path="/create" element={user && <Create />} />
            <Route path="/prompts" element={user && <PromptList />} />
            <Route path="/prompts/:id" element={user && <Prompt />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
