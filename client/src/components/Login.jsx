import { useState } from 'react'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('student_123');
  const [password, setPassword] = useState('password');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-header">
          <h2>Campus ERP System</h2>
          <p>Please sign in to access your portal</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="studentId">Student ID</label>
            <input 
              type="text" 
              id="studentId"
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="e.g. 104859"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="btn-primary">Sign In to ERP</button>
        </form>
      </div>
    </div>
  )
}
