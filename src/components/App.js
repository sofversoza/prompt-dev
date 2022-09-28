import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext'
import Home from "../pages/Home"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Login from "./Login"
import Signup from "./Signup"
import LandingPage from "../pages/LandingPage"
import Profile from "../pages/Profile"
import Settings from "../pages/Settings"
import Create from "../pages/Create"
import Read from "../pages/Read"

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }/>
            <Route path="/update-profile" element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            }/>
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/create" element={<Create />} />
            <Route path="/all-prompts" element={<Read />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
