import React from 'react'
import Header from '../Coman/Header'
import Footerdata from '../../Bootsrtap/Footerdata'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <Header />
      <h1>hello This ABout Page</h1>
      <div className="container">
        <Link to="about1" className='mx-2'>About 1</Link>
        <Link to="about2" >About 2</Link>
        <Outlet />
      </div>
      <Footerdata />
    </div>
  )
}

export default About
