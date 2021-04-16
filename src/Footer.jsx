import React from 'react';
import './Footer.css';
import { isMobile } from 'react-device-detect';
import { SocialIcon } from 'react-social-icons';

const socialSize = isMobile ? 25 : 45;

const Footer = ({socialLinks}) => (
  <div className="socialContainer">
    {socialLinks.map(link => (
      <SocialIcon
        key={link}
        url={link}
        bgColor="#FFFFFF"
        className={isMobile ? 'socialMobile' : 'social'}
        style={{ height: socialSize, width: socialSize }}
      />
    ))}
    <br />
    <a href="http://mlh.io/code-of-conduct">MLH Code of Conduct</a>
  </div>
);

export default Footer;
