import React from 'react';
import './body.css';
import uber from '../../assets/uber.png';
import launchdarkly from '../../assets/launchdarkly.png';
import intercom from '../../assets/intercom.png';
import squarespace from '../../assets/squarespace.png';
import hashicorp from '../../assets/hashicorp.png';
import presentation from '../../assets/bg-salon.jpg';

const Body = () => {
  return (
    <section className="body">
      
      <div className="body-partners">
        <img src={ uber } alt="Logo partenaire Uber" />
        <img src={ launchdarkly } alt="Logo partenaire LaunchDarkly" />
        <img src={ intercom } alt="Logo partenaire Intercom" />
        <img src={ squarespace } alt="Logo partenaire SquareSpace" />
        <img className='partners-hashicorp' src={ hashicorp } alt="Logo partenaire HashiCorp" />
      </div>

      <div className="body-presentation" id='interior'>
        <img src={ presentation } alt="Image de présentation" />
        <br /> 
        <br />
        <div className="presentation-text">
          <h2>The <span className="highlight">best interior</span> comes from Levyna</h2> 
          <br />
          <p className="presentation-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
          </p> 
          <br />
          <a href="#interior"><button className="presentation-button">See our interior</button></a>
        </div>
      </div>

    </section>
  )
}

export default Body