import React, { useState } from 'react';
import { Link } from 'react-router-dom'

let getTime = (note) => {
    return new Date(note.updated).toLocaleDateString()
}

let getTitle = (note) => {

    let title = note.body.split('\n')[0]
    if (title.length > 45) {
        return title.slice(0, 45)
    }
    return title
}


let getContent = (note) => {
    let title = getTitle(note)
    let content = note.body.replaceAll('\n', ' ')
    content = content.replaceAll(title, '')

    if (content.length > 45) {
        return content.slice(0, 45) + '...'
    } else {
        return content
    }
}


const ListItem = ({ note }) => {
    const [isContentVisible, setIsContentVisible] = useState(true);
    const [isPasswordWindowOpen, setIsPasswordWindowOpen] = useState(false);
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const togglePasswordWindow = () => {
        if (!isContentVisible) {
            setIsPasswordWindowOpen(!isPasswordWindowOpen);
        }
      
        if (isContentVisible) {
            setIsContentVisible(!isContentVisible);
        }
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (password === 'password') {
        setIsContentVisible(true);
        setIsPasswordWindowOpen(false);
        setErrorMessage('');
      } else {
        setErrorMessage('Incorrect password. Please try again.');
      }
    };
  
    return (
      <div className="notes-list-item">
        <div className="single-note-header">
                <h3>{getTitle(note)}</h3>
                <button onClick={togglePasswordWindow}>
                    {isContentVisible ? 'Hide Content' : 'Show Content'}
                </button>
        </div> 
        {isPasswordWindowOpen && (
          <div className="password-text">
            <form onSubmit={handleSubmit}>
              <label htmlFor="password-input">Password:</label>
              <input
                id="password-input"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <button type="submit">Submit</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        )}
        {isContentVisible && (
          <Link to={`/note/${note.id}`}>
            <p>
              <span>{getTime(note)}</span>
              {getContent(note)}
            </p>
          </Link>
        )}
      </div>
    );
}

export default ListItem
