import React from 'react';
import Home from './components/Home';

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Goals Galore
        </a>
      </nav>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1>Goals Galore</h1>
        </div>
        <div className="row justify-content-center">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
