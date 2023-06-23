import { useState } from 'react'
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home';
import Check from './pages/Check';
import Contact from './pages/Contact';
import Error from './pages/Error';
import DashBoard from './pages/DashBorad';
import Profile from './pages/Profile';

import './App.css';
import { Menu, Space } from 'antd';

function App() {

  let activeClassName = "nav-active"

  return (
    <BrowserRouter>
      {/* <header>
        <h1>Hello World</h1>
      </header> */}

      <nav >
        <Space>
          <NavLink end to="/" className={({ isActive }) => isActive ? activeClassName : undefined}>เสนอเคส</NavLink>
          <NavLink to="/check" className={({ isActive }) => isActive ? activeClassName : undefined}>ตรวจสอบข้อมูล</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClassName : undefined}>รวม</NavLink>
          <NavLink to="/dashborad" className={({ isActive }) => isActive ? activeClassName : undefined} >Dashborad</NavLink>
        </Space>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/check' element={<Check />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/dashborad' element={<DashBoard />} >
          <Route path='setting' element={<p>This is setting route</p>} />
        </Route>
        <Route path='/profile'>
          <Route path=':userId' element={<Profile />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
