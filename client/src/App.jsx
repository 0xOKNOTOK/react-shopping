import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss'
import About from './pages/About'
import Homepage from './pages/Homepage'
import Products from './pages/Products'
import Cart from './pages/Cart'

function App () {
  const cartLocalStorage =
    JSON.parse(localStorage.getItem('cartContents')) || []
  const [cart, setCart] = useState(cartLocalStorage)
  const [cartCounter, setCartCounter] = useState(cartLocalStorage.length)

  const addItemToCart = item => {
    const isCart = cart.find(product => product.id === item.id)
    if (isCart) {
      cart.map(product =>
        item.id === product.id ? { ...item, amount: item.amount++ } : item
      )

      setCartCounter(cartCounter + 1)
    } else {
      const newProduct = {
        title: item.title,
        id: item.id,
        type: item.type,
        description: item.description,
        filename: item.filename,
        price: item.price,
        rating: item.rating,
        amount: 1
      }
      setCart([...cart, newProduct])
      setCartCounter(cartCounter + 1)
    }
  }

  const removeItemFromCart = item => {
    const isCart = cart.find(product => product.id === item.id)
    if (isCart) {
      if (isCart.amount > 1) {
        cart.map(product =>
          item.id === product.id ? { ...item, amount: item.amount-- } : item
        )

        setCartCounter(cartCounter - 1)
      } else {
        setCart(cart.filter(product => product.id !== item.id))
        setCartCounter(cartCounter - item.amount)
      }
    }
  }

  const clearCartOfItems = () => {
    setCart([])
    setCartCounter(0)
  }

  return (
    <div className='site'>
      <BrowserRouter>
        <Switch>
          <Route path='/products'>
            <Products addItemToCart={addItemToCart} cartCounter={cartCounter} />
          </Route>
          <Route path='/about'>
            <About cartCounter={cartCounter} />
          </Route>
          <Route path='/cart'>
            <Cart
              clearCartOfItems={clearCartOfItems}
              cartContents={cart}
              cartCounter={cartCounter}
              removeItemFromCart={removeItemFromCart}
              addItemToCart={addItemToCart}
            />
          </Route>
          <Route path='/'>
            <Homepage cartCounter={cartCounter} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
