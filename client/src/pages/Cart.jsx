import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import Button from '../components/Button'
import '../styles/cart.scss'

const Cart = ({ clearCartOfItems, cartContents }) => {
  const [value, setValue] = useState(0)

  const getPrice = () => {
    cartContents.forEach(item => {
      setValue(previousValue => previousValue + item.price)
      console.log(typeof item.price)
    })
  }

  const resetCartValue = () => {
    setValue(0)
  }

  useEffect(() => {
    getPrice()
  }, [cartContents])

  return (
    <div>
      <Navigation />
      <main className='cart_page'>
        <h1>Cart</h1>
        <p>Your current items: </p>
        <ul>
          {cartContents.map(item => (
            <div className='cart_item'>
              <li>
                <h5>{item.name}</h5>
                <p>{item.info}</p>
                <span>{`$${item.price}`}</span>
              </li>
            </div>
          ))}
        </ul>
        <h1>Your item total is ${value}.</h1>
        <Button buttonLabel={'CHECKOUT'} />
        <Button
          handleClick={() => {
            resetCartValue()
            clearCartOfItems()
          }}
          buttonLabel={'EMPTY CART'}
        />
      </main>
    </div>
  )
}

export default Cart
