import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const handleAttachFile = e => {
    console.log('files upload', e.target.files)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="file" multiple onChange={handleAttachFile} />
      </header>
    </div>
  );
}

export default App;
