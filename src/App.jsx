import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss'
import Navigation from './components/Navigation'
import About from './pages/About'
import Homepage from './pages/Homepage'
import Products from './pages/Products'
import Cart from './pages/Cart'

function App () {
  return (
    <div className='site'>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/cart'>
            <Cart />
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
