import React from 'react'
import '../styles/homepage.scss'
import Keycap from '../images/keycap.jpg'
import Navigation from '../components/Navigation'
import ButtonRoute from '../components/ButtonRoute'

const Homepage = ({ cartCounter }) => {
  return (
    <div>
      <Navigation cartCounter={cartCounter} />
      <div
        style={{ background: `url(${Keycap}) no-repeat center center fixed` }}
        className='home_page'
      >
        <div className='landing_page'>
          <div>
            <div className='title_and_text'>
              <h1 className='page_title'>deskpads.uk</h1>
              <p>
                We sell high-quality deskpads, keycaps and keyboard accessories
                to UK enthusiats.
              </p>
            </div>
            <ButtonRoute
              buttonRoute={'/products'}
              buttonLabel={'View Products'}
            />
            <button>Get Notified</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
