import React from 'react';
import './Footer.css';
import { isMobile } from 'react-device-detect';
import { SocialIcon } from 'react-social-icons';

const socialSize = isMobile ? 25 : 45;
const Footer = (props) => (
  <div className='socialContainer'>
    {props.socialLinks.map(link => (
      <SocialIcon url={link} bgColor='#ffffff' className={ isMobile ? 'socialMobile' : 'social' } style={{ height: socialSize, width: socialSize }} />
    ))}
  </div>
);

export default Footer;
