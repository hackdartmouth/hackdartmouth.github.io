import React from 'react';
import './Footer.css';
import { Button } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll, scrollSpy, scroller } from 'react-scroll';
import { isMobile } from 'react-device-detect';
import { SocialIcon } from 'react-social-icons';

const socialSize = isMobile ? 25 : 35;
const Footer = (props) => (
    <div className='socialContainer'>
            {props.socialLinks.map(link => (
                <SocialIcon url={link} bgColor='#ffffff' className={ isMobile ? 'socialMobile' : 'social' } style={{ height: socialSize, width: socialSize }} />
            ))}
    </div>
);

export default Footer;