import React from 'react'
import Button from './Button'

const Card = ({
  productName,
  productPrice,
  productDescription,
  productImage,
  addItemToCart
}) => {
  const handleAddCartButton = e => {
    e.preventDefault()
    addItemToCart(productName, productPrice, productDescription)
  }

  return (
    <div className='product_card'>
      <img src={`/images/${productImage}`} alt=''></img>
      <h3>{productName}</h3>
      <p>{productDescription}</p>
      <h4>{`$${productPrice}`}</h4>
      <Button handleClick={handleAddCartButton} buttonLabel={'Add To Cart'} />
    </div>
  )
}

export default Card
