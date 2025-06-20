import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import { Item } from './component/item/Item';
import { Request } from './component/request/Request';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Item/> */}
      <Request/>
    </div>
  );
}

export default App;
