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
    <br></br>
    <a style={{color:"#FFFFFF"}} href="http://mlh.io/code-of-conduct" class="active">MLH Code of Conduct</a>
  </div>
  
);

export default Footer;
