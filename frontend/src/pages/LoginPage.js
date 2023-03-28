import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Check the username and password against a database or API
    // If the credentials are valid, redirect to the notes list page
    if (username === 'example' && password === 'password') {
      history.push('/home');
    } else {
      // Display an error message if the credentials are invalid
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <div className="form-group">
        <label className="form-label">Username:</label>
        <input
          className="form-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Password:</label>
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
