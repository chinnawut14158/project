import React from 'react'
import { Navigatee, useNavigate } from 'react-router-dom'

function About() {

    let navigate = useNavigate()

  return (
    <div>
        <p>About</p>
        <button onClick={() => navigate("/", { state: "From About page"})} >Redirect</button>
    </div>
  )
}

export default About