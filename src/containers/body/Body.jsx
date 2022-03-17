import React from 'react';
import './body.css';
import uber from '../../assets/uber.png';
import launchdarkly from '../../assets/launchdarkly.png';
import intercom from '../../assets/intercom.png'
import squarespace from '../../assets/squarespace.png';
import hashicorp from '../../assets/hashicorp.png';

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

    </section>
  )
}

export default Body