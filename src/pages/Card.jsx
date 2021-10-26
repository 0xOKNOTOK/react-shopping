import React from 'react'
import Button from './Button'

const Card = props => {
  return (
    <div className='product_card'>
      <img src='' alt=''></img>
      <h3>{props.productName}</h3>
      <p>{props.productDescription}</p>
      <Button buttonLabel={'Add To Cart'} />
    </div>
  )
}

export default Card
