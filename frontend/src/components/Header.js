import React from 'react'
import logo from '../assets/logo.jpeg'
const Header = ({ mode, setMode }) => {
    const handleClick = () => {
      setMode(mode === 'dark' ? 'light' : 'dark');
    };
    return (
      <div className="app-header">
        <img src={logo} alt="My Logo" />
        <button onClick={handleClick}>
          {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    );
  };

export default Header

