import React from 'react';
import './Header.css';
import Particles from 'react-particles-js';

const headerInfo = {
  // title: 'HackDartmouth VIrtual',
  date: 'April 16-18th, 2021',
  location: '',
  backgroundImg: 'header.png',
  sectionColor: '#5f936a',
};

const Header = () => (
  <>
    <div className="headerContainer" style={{ backgroundColor: headerInfo.sectionColor }}>
      <div style={{ position: 'absolute', width: '100%' }}>
        <Particles
          height="100vh"
          width="100%"
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: true,
                },
              },
              size: {
                value: 10,
                random: true,
              },
              move: {
                direction: 'bottom',
                out_mode: 'out',
              },
              line_linked: {
                enable: false,
              },
            },
            interactivity: {
              events: {
                hover: {
                  enable: false,
                  mode: 'repulse',
                },
              },
              modes: {
                remove: {
                  particles_nb: 10,
                },
              },
            },
          }}
        />
      </div>
      <div className="textBigContainer">
        <div className="textContainer">
          <p className="title">Hack<b>Dartmouth VI</b><span className="title-small">rtual</span></p>
          <p className="info">
            {headerInfo.date}
            {' '}
|
            {' '}
            {headerInfo.location}
          </p>
          {/* <p className="info">{`${headerInfo.date} | ${headerInfo.location}`}</p>
        <Link activeClass="active" className="test1" to={"register"} spy={true} smooth={true} duration={500} offset={-58}>
          <Button variant="outline-light" className="registerButton" style={{ backgroundColor: "#ffffff", borderStyle: "none", color: "#5f936a", fontWeight: "bold"}}>
          Register!
          </Button>
        </Link> */}
        </div>
      </div>
    </div>
  </>


);

export default Header;
