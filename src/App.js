import React from 'react';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Goals Galore
        </a>
      </nav>
      <div className="container-fluid body">
        <div className="row justify-content-center">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
