import React from 'react'
import Button from './Button'

const CartCard = ({ item, removeItemFromCart }) => {
  const handleRemoveItemButton = e => {
    e.preventDefault()
    console.log(item)
    removeItemFromCart(item.id)
  }
  return (
    <div className='product_card'>
      <img src={`assets/${item.image}`} alt=''></img>
      <h3>{item.name}</h3>
      <p>{item.info}</p>
      <h4>{`$${item.price}`}</h4>
      <Button
        handleClick={handleRemoveItemButton}
        buttonLabel={'Remove Item'}
      />
    </div>
  )
}

export default CartCard
