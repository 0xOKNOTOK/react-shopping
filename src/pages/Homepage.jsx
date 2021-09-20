import React from 'react'
import '../styles/homepage.scss'
import Keycap from '../images/keycap.jpg'

const Homepage = () => {
  return (
    <div
      style={{ background: `url(${Keycap}) no-repeat center center fixed` }}
      className='home_page'
    >
      <div className='landing_page'>
        <div>
          <h1 className='page_title'>deskpads.uk</h1>
          <p>
            We sell high-quality deskpads, keycaps and keyboard accessories to
            UK enthusiats.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Homepage
