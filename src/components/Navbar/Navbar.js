import React from 'react'
import { withRouter } from 'react-router-dom'
import './navbar.scss'

const Navbar = props => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light navbar-custom'>
      <p className='mr-auto ml-4'>{props.location.pathname.split('/')[1]}</p>
    </nav>
  )
}

export default withRouter(Navbar)
