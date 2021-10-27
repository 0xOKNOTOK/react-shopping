import React from 'react'
import Navigation from '../components/Navigation'
import Button from './Button'

const Cart = ({ clearCartOfItems }) => {
  return (
    <div>
      <Navigation />
      <div className='cart_page'>
        <h1>Cart</h1>
        <p>Your current items: </p>
        <Button handleClick={clearCartOfItems} buttonLabel={'EMPTY CART'} />
      </div>
    </div>
  )
}

export default Cart
