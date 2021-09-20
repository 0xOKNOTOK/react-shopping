import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navigation.scss'

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/products'>Products</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/cart'>CART_ICON</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
