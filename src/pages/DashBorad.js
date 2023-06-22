import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function DashBorad({ logout }) {
  return (
    <div>
        <h3>DashBorad</h3>
        <Link to="setting" >Setting</Link>
        <Outlet />
        <p>Welcome User</p>
        <button onClick={logout} >Logout</button>
    </div>
  )
}

export default DashBorad