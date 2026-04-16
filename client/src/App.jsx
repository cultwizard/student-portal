import { useState } from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Realistic mock login handler
  const handleLogin = (username, password) => {
    if (username && password) {
      setIsAuthenticated(true);
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
  }

  return (
    <div className="app-container">
      {isAuthenticated ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App
