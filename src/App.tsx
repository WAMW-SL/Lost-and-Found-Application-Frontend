import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import { Item } from './component/item/Item';
import { Request } from './component/request/Request';
import { User } from './component/user/User';
import { BrowserRouter, Route, Routes } from 'react-router';
import { SignIn } from './component/auth/SignIn';
import { SignUp } from './component/auth/SignUp';
import { AuthProvider } from './component/auth/AuthProvider';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Item />} />
        <Route path="/item" element={<Item />} />
        <Route path="/request" element={<Request />} />
        <Route path="/user" element={<User />} />
        <Route path="/signin" element={<SignIn />} />Add commentMore actions
        <Route path="/signup" element={<SignUp />} />
      </Routes>
       </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
