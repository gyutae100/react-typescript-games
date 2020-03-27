import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Profile username="kim" name="gyutae"/>
      <Counter />
    </div>
  );
}

export default App;
