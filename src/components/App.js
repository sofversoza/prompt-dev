import Signup from "./Signup"
import { AuthProvider } from '../contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div className="container">
        <div className="container-items">
          <Signup />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
