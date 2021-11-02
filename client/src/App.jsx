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

  const addItemToCart = (
    productName,
    productPrice,
    productDescription,
    index
  ) => {
    const item = {
      name: productName,
      price: productPrice,
      info: productDescription
    }
    setCart(cart => [...cart, item])
  }

  const clearCartOfItems = () => {
    setCart([])
  }

  return (
    <div className='site'>
      <BrowserRouter>
        <Switch>
          <Route path='/products'>
            <Products addItemToCart={addItemToCart} />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/cart'>
            <Cart clearCartOfItems={clearCartOfItems} cartContents={cart} />
          </Route>
          <Route path='/'>
            <Homepage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
