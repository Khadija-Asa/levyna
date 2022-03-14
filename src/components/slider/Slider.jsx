import React from 'react';
import './slider.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

const Slider = () => {
  return (
    <section className='slider'>

      <h3>our newest interior</h3>
      <div className="slider-card">

        <div className="slider-img1">
          <div className="card-img1">
            <img src={ img1 } alt="Image produit" />
          </div>
          <div className="card-text">
            <p className='card-1'><span className='card-title'>product name</span> <span className='card-subtitle'>edoardo sofa</span></p>
            <p><span className='card-title'>price</span> <span className='card-subtitle'>$150</span></p>
          </div>
        </div>

        <div className="slider-img2">
          <div className="card-img2">
            <img src={ img2 } alt="Image produit" />
          </div>
          <div className="card-text">
            <p className='card-2'><span className='card-title'>product name</span> <span className='card-subtitle'>chandelier</span></p>
            <p><span className='card-title'>price</span> <span className='card-subtitle'>$120</span></p>
          </div>
        </div>

        <div className="slider-img3">
          <div className="card-img3">
            <img src={ img3 } alt="Image produit" />
          </div>
          <div className="card-text">
            <p className='card-3'><span className='card-title'>product name</span> <span className='card-subtitle'>Coward Sofa and Table</span></p>
            <p><span className='card-title'>price</span> <span className='card-subtitle'>$210</span></p>
          </div>
        </div>

        

      </div>

    </section>
  )
}

export default Slider