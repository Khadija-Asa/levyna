import React, { useState } from 'react';
import { RiMenu4Fill, RiCloseFill, RiFacebookCircleFill, RiInstagramLine, RiArrowLeftSFill } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo_small.png';

const Menu = () => (
  <>
    <ul>
      <li><a href="#">About <RiArrowLeftSFill/></a></li>
      <li><a href="#interior">Interior <RiArrowLeftSFill/></a></li>
      <li> <a href="#contact">Contact <RiArrowLeftSFill/></a></li>
      <li> <a href="#testimonial">Testimonial <RiArrowLeftSFill/></a></li>    
    </ul>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (

    <div className="navbar bg-color">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#"><img src={logo} alt="Logo Levyna" /></a>
        </div>  
        <div className="navbar-links">
          <Menu />
        </div>  
        <div className="navbar-social-media">
          <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><RiFacebookCircleFill/></a>
          <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><RiInstagramLine/></a>
          <button className='navbar-button' type='button'><a href="#contact"></a>Get Started</button>
        </div>   
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseFill color='#fff' size={25} onClick={() => setToggleMenu(false)} />
          : <RiMenu4Fill color='#fff' size={25} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="navbar-menu-mobile">
            <div className="navbar-menu-links-mobile">
              <Menu />
            </div>
            <div className="navbar-social-media-mobile">
              <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><RiFacebookCircleFill/></a>
              <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><RiInstagramLine/></a>
            </div>
            <div className="navbar-button-mobile">
              <button className='navbar-button-mobile' type='button'><a href="#contact"></a>Get Started</button>
            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default Navbar