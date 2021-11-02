import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navigation.scss'
import CartNotification from './CartNotification'

const Navigation = ({ cartCounter }) => (
  <nav>
    <ul>
      <li>
        <Link className='nav_anchor' to='/'>
          Home
        </Link>
      </li>
      <li>
        <Link className='nav_anchor' to='/products'>
          Products
        </Link>
      </li>
      <li>
        <Link className='nav_anchor' to='/about'>
          About
        </Link>
      </li>
      <li>
        <Link className='nav_anchor' to='/cart'>
          <CartNotification cartCounter={cartCounter} />
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
