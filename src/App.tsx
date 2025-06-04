import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import { Item } from './component/Item';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Item/>
    </div>
  );
}

export default App;
