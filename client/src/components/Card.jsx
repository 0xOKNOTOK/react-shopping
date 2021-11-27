import React from 'react'
import Button from './Button'

const Card = ({ item, addItemToCart }) => {
  const handleAddCartButton = e => {
    e.preventDefault()
    console.log(item)
    addItemToCart(item)
  }

  return (
    <div className='product_card'>
      <img src={`assets/${item.filename}`} alt=''></img>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h4>{`$${item.price}`}</h4>
      {item.rating}
      <Button handleClick={handleAddCartButton} buttonLabel={'Add To Cart'} />
    </div>
  )
}

export default Card
