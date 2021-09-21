import React from 'react'
import Navigation from '../components/Navigation'

const Cart = () => {
  return (
    <div>
      <Navigation />
      <div className='cart_page'>
        <h1>Cart</h1>
        <p>Your current items: </p>
      </div>
    </div>
  )
}

export default Cart
