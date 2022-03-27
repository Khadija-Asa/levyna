import React from 'react';
import './footer.css';
import logo from '../../assets/logo_small.png';
import { BsInstagram, BsDribbble, BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='bg-color-second'>
      <div className="footer">
        <div className='footer-text'>
          <img src={ logo } alt="Logo Levyna" />
          <p>
            We try to understand as best we can because of your desire to realize your dream home,
            of course with minimal costs but the best quality possible
          </p>
        </div>
        <div className="footer-list">
          <div className='footer-company'>
            <h5>company</h5>
            <ul>
              <li>about us</li>
              <li>contact</li>
              <li>career</li>
              <li>blog</li>
            </ul>
          </div>
          <div className='footer-contact'>
            <h5>contact us</h5>
            <ul>
              <li>website</li>
              <li>email</li>
              <li>whatsapp</li>
            </ul>
          </div>
          <div className='footer-support'>
            <h5>support</h5>
            <ul>
              <li>FAQ</li>
              <li>booking</li>
              <li>store</li>
            </ul>
          </div>
          <div className='footer-office'>
            <h5>office</h5>
            <ul>
              <li>domino street, district 456,</li>
              <li>los angeles USA</li>
              <li> <strong>+44 652 762 887</strong> </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <h6>2020 Levyna inc. All Rights Reserved</h6>
          <ul>
            <li>
              <a href="http://intagram.com" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
            </li>
            <li>
              <a href="http://dribbble.com" target="_blank" rel="noopener noreferrer"><BsDribbble/></a>
            </li>
            <li>
              <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
            </li>
          </ul>
      </div>
    </footer>
  )
}

export default Footer