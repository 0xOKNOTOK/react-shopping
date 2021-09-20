import React from 'react'
import '../styles/homepage.scss'
import Keycap from '../images/keycap.jpg'
import Navigation from '../components/Navigation'

const Homepage = () => {
  return (
    <div
      style={{ background: `url(${Keycap}) no-repeat center center fixed` }}
      className='home_page'
    >
      <Navigation />
      <div className='landing_page'>
        <div>
          <div className='title_and_text'>
            <h1 className='page_title'>deskpads.uk</h1>
            <p>
              We sell high-quality deskpads, keycaps and keyboard accessories to
              UK enthusiats.
            </p>
          </div>
          <button>View Products</button>
          <button>Get Notified</button>
        </div>
      </div>
    </div>
  )
}

export default Homepage
