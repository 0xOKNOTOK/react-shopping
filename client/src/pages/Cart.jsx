import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import Button from '../components/Button'

const Cart = ({ clearCartOfItems, cartContents }) => {
  const [value, setValue] = useState(0)

  const getPrice = () => {
    cartContents.forEach(item => {
      setValue(previousValue => previousValue + item.price)
      console.log(typeof item.price)
    })
  }

  useEffect(() => {
    getPrice()
  }, [])
  console.log(cartContents)
  return (
    <div>
      <Navigation />
      <div className='cart_page'>
        <h1>Cart</h1>
        <p>Your current items: </p>
        <ul>
          {cartContents.map(item => (
            <li>
              <h5>{item.name}</h5>
              <p>{item.info}</p>
              <span>{`$${item.price}`}</span>
            </li>
          ))}
        </ul>
        <h1>YOUR TOTAL IS {value}</h1>
        <Button handleClick={clearCartOfItems} buttonLabel={'EMPTY CART'} />
      </div>
    </div>
  )
}

export default Cart
