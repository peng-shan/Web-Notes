import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import React, { useState } from 'react';


import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'
import LoginPage from "./pages/LoginPage";

function App() {
  const [mode, setMode] = useState('light');
  return (
    <Router>
      <div className={`container ${mode}`}>
        <div className="app">
        <Header mode={mode} setMode={setMode} />
          <Route path='/' exact component={LoginPage} />
          <Route path="/home" exact component={NotesListPage} />
          <Route path="/note/:id" component={NotePage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
