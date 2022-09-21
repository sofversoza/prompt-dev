import Signup from "./Signup"
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from "../pages/Dashboard"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Login from "./Login"

function App() {
  return (
      <div className="container">
        <div className="container-items">
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route path="/" element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }/>
                <Route path="/update-profile" element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                }/>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
