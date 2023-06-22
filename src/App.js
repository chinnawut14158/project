import { useState } from 'react'
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import DashBoard from './pages/DashBorad';
import Profile from './pages/Profile';

import './App.css';
import { Menu } from 'antd';
import { PlusOutlined, FileTextFilled, ReconciliationFilled, ArrowLeftOutlined, ArrowRightOutlined, SaveFilled, CloseSquareFilled, HomeFilled } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';




function App() {

  const [loggedIn, setLoggedIn] = useState(null)
  function handlelogin() {
    setLoggedIn(true)
  }

  function handlelogout() {
    setLoggedIn(false)
  }

  let activeClassName = "nav-active"

  return (
    <BrowserRouter>
      {/* <header>
        <h1>Hello World</h1>
      </header> */}
      <nav >
        <NavLink end to="/" className={({ isActive }) => isActive ? activeClassName: undefined }>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? activeClassName: undefined }>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? activeClassName: undefined }>Contact</NavLink>
        <NavLink to="/dashborad" className={({ isActive }) => isActive ? activeClassName: undefined } >Dashborad</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={ loggedIn ? <Navigate to="/dashborad"/> : <Home login={handlelogin} />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/dashborad' element={loggedIn ? <DashBoard logout={handlelogout}/> : <Navigate to="/" state={"From DashBoard"}/>} >
          <Route path='setting' element={<p>This is setting route</p>} />
        </Route>
        <Route path='/profile'>
          <Route path=':userId' element={<Profile/>} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
