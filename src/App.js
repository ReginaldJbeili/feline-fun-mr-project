import React from 'react';
import logo from './logo.svg';
import './App.css';
import CatDropdown from './components/CatDropdown';
import CatInfo from './components/CatInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <CatDropdown />
        <CatInfo />
        
      </header>
    </div>
  );
}

export default App;
