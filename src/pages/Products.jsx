import React from 'react'
import '../styles/products.scss'
import Navigation from '../components/Navigation'
import Card from './Card'
import Footer from '../components/Footer'

const Products = () => {
  return (
    <div>
      <Navigation />
      <div className='products_page'></div>

      <main>
        <div className='page-header'>
          <h1>Products</h1>
          <section className='products_wrapper'>
            <Card className='card' productName={'Gateoron Yellows'} />
            <Card productName={'Gateoron Yellows'} />
            <Card productName={'Gateoron Yellows'} />
            <Card productName={'Gateoron Yellows'} />
            <Card productName={'Gateoron Yellows'} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Products
