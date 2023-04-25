import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function Head() {
  return (
    <div>
    <header id='head'>
    <h1 id='title'>My Portfolio</h1>
    <nav>
    <Link to='/home' id='home' class='tags'>HOME</Link>
    <Link to='/about' id='about' class='tags'>ABOUT</Link>
    <Link to='/hobby' id='hobby' class='tags'>HOBBIES / INTERESTS</Link>
    <Link to='/contact' id='contact' class='tags'>CONTACT</Link>
    </nav>
    </header>
    <Outlet/>
    </div>
  )
}