import React from 'react'

const Header = ({ mode, setMode }) => {
    const handleClick = () => {
      setMode(mode === 'dark' ? 'light' : 'dark');
    };
    return (
      <div className="app-header">
        <h1>WebNotes</h1>
        <button onClick={handleClick}>
          {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    );
  };

export default Header

