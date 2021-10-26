import React from 'react'
import Button from './Button'

const Card = props => {
  return (
    <div className='product_card'>
      <img src={`/images/${props.productImage}`} alt=''></img>
      <h3>{props.productName}</h3>
      <p>{props.productDescription}</p>
      <h4>{`$${props.productPrice}`}</h4>
      <Button buttonLabel={'Add To Cart'} />
    </div>
  )
}

export default Card
