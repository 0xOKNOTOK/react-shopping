import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import Button from '../components/Button'
import '../styles/cart.scss'
import '../styles/products.scss'

const Cart = ({ clearCartOfItems, cartContents, cartCounter }) => {
  const [value, setValue] = useState(0)

  const getPrice = () => {
    cartContents.forEach(item => {
      setValue(previousValue => previousValue + item.price)
    })
  }

  const resetCartValue = () => {
    setValue(0)
  }

  useEffect(() => {
    localStorage.setItem('cartContents', JSON.stringify(cartContents))

    getPrice()
  }, [cartContents])

  return (
    <div>
      <Navigation cartCounter={cartCounter} />
      <main className='cart_page'>
        <h1>Cart</h1>
        <p>Your current items: </p>
        <ul className='products_wrapper'>
          {cartContents.map(item => (
            <div className='product_card'>
              <img src={`assets/${item.image}`} alt=''></img>
              <h3>{item.name}</h3>
              <p>{item.info}</p>
              <h4>{`$${item.price}`}</h4>
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
