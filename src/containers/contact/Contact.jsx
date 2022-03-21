import React from 'react';
import './contact.css';
import { BsTelephone, BsGlobe2 } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';

const Contact = () => {
  return (
    <section className="contact" id='contact'>

      <div className="contact-text">
        <h4>Tell us about your <br /> <span className="highlight">dream interior</span></h4>
        <br />
        <p className='contact-list'>
          <ul>
            <li><BsTelephone /> +1 237 348 3489</li>
            <li><MdLocationPin /> San Francisco, California</li>
            <li><BsGlobe2 /> www.levyna.com</li>
          </ul>
        </p>
      </div>

      <div className="contact-form">

      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Your Name <input type="text" name="name" placeholder='Enter Your Name Here' /></label>   
        </p>
        <p>
          <label>Your Email <input type="email" name="email" placeholder='Enter Your Email Here' /></label>
        </p>
        <p>
          <label>Description <textarea name="message" placeholder='Tell me the interior you want'></textarea></label>
        </p>
        <p>
          <button type="submit">Send Now</button>
        </p>
      </form>

      </div>

    </section>
  )
}

export default Contact