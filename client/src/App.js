import React from 'react';
import { connect } from 'react-redux';

import { setUploadFile } from './redux/uploadFile/uploadFile.actions';


import logo from './logo.svg';
import './App.css';

import UploadProgress from './components/UploadProgress/UploadProgress';

function App(props) {

  const handleAttachFile = e => {
    console.log('files upload', e.target.files)
    props.setUploadFile(e.target.files)
    e.target.value = ''
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="file" multiple onChange={handleAttachFile} />
      </header>
      <UploadProgress />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setUploadFile: files => dispatch(setUploadFile(files))
})

export default connect(null, mapDispatchToProps)(App);
