import React from 'react';

import { images} from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about' >
    <div classname='app__aboutus-overlay flex__center'>
      <img src={images.PB} alt='pb letters' />
    </div>

    <div classname='app__aboutus-content flex__center'>
      <div classname='app__aboutus-about_aboutus'>
        <h1 className='headtext__cormorant'>About Us</h1>
      </div>
    </div>
  </div>
);

export default AboutUs;
