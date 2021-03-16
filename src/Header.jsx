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
    {/* MLH Trust Badge, attached to header, stays at top as you scroll */}
    <a id="mlh-trust-badge" style={{display: 'block', maxWidth: '100px', minWidth: '60px', position: 'fixed', right: '50px', top: 0, width: '10%', zIndex: 10000}} 
      href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=gray" target="_blank">
        <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-gray.svg" alt="Major League Hacking 2021 Hackathon Season" style={{width: '100%'}} />
    </a>

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
