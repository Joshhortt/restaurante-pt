import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Tv. da Audiência n 1, 7800-393 Beja, Portugal</p>
        <p className="p__opensans">+351 964 438 030</p>
      </div>

      <div className="app__footer-links_logo">

      </div>

      <div className="app__footer-links_work">

      </div>
  </div>


  </div>
);

export default Footer;
