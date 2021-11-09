import React from 'react'
import Button from './Button'
import QuantitySelector from './QuantitySelector'

const CartCard = ({ item, removeItemFromCart, totalValue, getPrice }) => {
  const handleRemoveItemButton = e => {
    e.preventDefault()
    getPrice(false)
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
        totalValue={totalValue}
        getPrice={getPrice}
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
