import React, { useState } from 'react'

import { FaShoppingCart } from 'react-icons/fa'

const CartNotification = ({ cartCounter }) => {
  return (
    <span className='cart-element'>
      <FaShoppingCart />
      <div className='card-counter'>{cartCounter}</div>
    </span>
  )
}

export default CartNotification
