import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navigation.scss'
import { FaShoppingCart } from 'react-icons/fa'

const Navigation = () => (
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
          <FaShoppingCart />
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
