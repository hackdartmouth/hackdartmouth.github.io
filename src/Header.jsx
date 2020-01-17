import React from 'react';
import './Header.css';
import { Button } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll, scrollSpy, scroller } from 'react-scroll'
import Particles from 'react-particles-js';

const headerInfo = {
  title: 'HackDartmouth VI',
  date: 'April 18-19th, 2020',
  location: 'Thayer School of Engineering',
  backgroundImg: 'header.png',
  sectionColor: '#5f936a',
};
const Header = () => (
  <>
    <div className="headerContainer" style={{ backgroundColor: headerInfo.sectionColor }}>
    <Particles 
    height="100vh"
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 10,
	            "random": true
	        },
	        "move": {
	            "direction": "bottom",
	            "out_mode": "out"
	        },
	        "line_linked": {
	            "enable": false
	        }
	    },
	    "interactivity": {
	        "events": {
	            "hover": {
	                "enable": false,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "remove": {
	                "particles_nb": 10
	            }
	        }
	    }
	}}/>
    <div className="text">
      <p className="title">{headerInfo.title}</p>
      <p className="info">{`${headerInfo.date} | ${headerInfo.location}`}</p>
      <Link activeClass="active" className="test1" to={"register"} spy={true} smooth={true} duration={500} offset={-58}>
        <Button variant="outline-light" className="registerButton" style={{ backgroundColor: "#ffffff", borderStyle: "none", color: "#5f936a", fontWeight: "bold"}}>
          Register!
        </Button>
      </Link>
    </div>
    </div>
  </>
 

  
);

export default Header;
