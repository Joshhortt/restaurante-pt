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
      <img src={images.peterbrissos} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Sunday-Thursday:</p>
        <p className="p__opensans">11:00 am - 11:00 pm</p>
        <p className="p__opensans">Friday-Saturday:</p>
        <p className="p__opensans">11:00 am - 12:00 am</p>
      </div>
      </div>

      <div className="footer__copyright">
      <p className="p__opensans">2022 Restaurant Peter Brissos. All Rights reserved.</p>
     </div>

  </div>
);

export default Footer;
