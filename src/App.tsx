import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import { Item } from './component/item/Item';
import { Request } from './component/request/Request';
import { User } from './component/user/User';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Item />} />
        <Route path="/item" element={<Item />} />
        <Route path="/request" element={<Request />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
