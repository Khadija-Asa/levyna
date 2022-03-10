import React from 'react';
import { CgArrowLongRight } from 'react-icons/cg';
import './header.css';

const Header = () => {
  return (
    <section className='home bg-color'>
      <h1 className='home-first-paragraph'>
        We help you in finding <br /> complementary <span className='highlight'>interiors</span> <br /> for your home
      </h1>
      <p className='home-second-paragraph'>
        We are <span className="light">interior</span> makers ourselves so it will be very easy for <br />
        us to realize your <span className="light">dream interior</span>, and also our prices are <br />
        quite competitive with the market so it will <span className="light">not burden you</span>
      <p className='home-link'>
        <a href="#interior">See our interior <CgArrowLongRight color='#fff' /></a>
      </p>
      </p>
    </section>
  )
}

export default Header