import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')

  const handleLogin = (name) => {
    setUserName(name)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserName('')
  }

  return (
    <div className="app">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard userName={userName} onLogout={handleLogout} />
      )}
    </div>
  )
}

export default App
