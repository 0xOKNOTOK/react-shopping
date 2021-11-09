import React from 'react'
import Button from './Button'
import QuantitySelector from './QuantitySelector'

const CartCard = ({ item, removeItemFromCart }) => {
  const handleRemoveItemButton = e => {
    e.preventDefault()
    removeItemFromCart(item)
  }

  console.log(item.amount)
  return (
    <div className='product_card'>
      <img src={`assets/${item.image}`} alt=''></img>
      <h3>{item.name}</h3>
      <p>{item.info}</p>
      <h4>{`$${item.price}`}</h4>
      <QuantitySelector
        handleRemoveItemButton={handleRemoveItemButton}
        displayedValue={item.amount}
      />

      <Button
        handleClick={handleRemoveItemButton}
        buttonLabel={'Remove Item'}
      />
    </div>
  )
}

export default CartCard
