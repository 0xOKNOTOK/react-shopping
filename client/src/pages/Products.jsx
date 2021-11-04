import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/products.scss'
import Navigation from '../components/Navigation'
import Card from '../components/Card'
import Footer from '../components/Footer'

const Products = ({ addItemToCart, cartCounter }) => {
  const [products, setProducts] = useState([])
  const API_ADDRESS = 'http://localhost:3001/api/products'
  useEffect(() => {
    axios.get(API_ADDRESS).then(response => {
      setProducts(response.data)
    })
  }, [])

  return (
    <div>
      <Navigation cartCounter={cartCounter} />
      <main>
        <div className='page-header'>
          <h1>Products</h1>
        </div>
        <section className='products_wrapper'>
          {products.map((product, index) => (
            <Card
              className='card'
              key={index}
              addItemToCart={addItemToCart}
              productName={product.title}
              productDescription={product.description}
              productImage={product.filename}
              productPrice={product.price}
              productId={product.id}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Products
