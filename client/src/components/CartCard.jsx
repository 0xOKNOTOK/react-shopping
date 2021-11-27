import React from 'react'
import Button from './Button'
import QuantitySelector from './QuantitySelector'

const CartCard = ({
  item,
  removeItemFromCart,
  addItemToCart,
  totalValue,
  getPrice
}) => {
  const handleRemoveItemButton = e => {
    e.preventDefault()
    getPrice(false)
    removeItemFromCart(item)
  }

  const handleAddItemButton = e => {
    e.preventDefault()
    getPrice(true)

    addItemToCart(item)
  }

  return (
    <div className='product_card'>
      <img src={`assets/${item.filename}`} alt=''></img>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h4>{`$${item.price}`}</h4>
      <QuantitySelector
        totalValue={totalValue}
        getPrice={getPrice}
        handleAddItemButton={handleAddItemButton}
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
