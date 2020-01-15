import React from 'react';
import './Header.css';
import { Button } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll, scrollSpy, scroller } from 'react-scroll'


const headerInfo = {
  title: 'HackDartmouth VI',
  date: 'April 18-19th, 2020',
  location: 'Thayer School of Engineering',
  backgroundImg: 'header.png',
};

const Header = () => (
  <div className="headerContainer">
    <img className="backgroundImg" src={require(`./img/pages/${headerInfo.backgroundImg}`)} alt="Background" />
    <div className="text">
      <p className="title">{headerInfo.title}</p>
      <p className="info">{`${headerInfo.date} | ${headerInfo.location}`}</p>
      <Link activeClass="active" className="test1" to={"register"} spy={true} smooth={true} duration={500} offset={-58}>
        <Button variant="outline-light" className="registerButton">
          Register!
        </Button>
      </Link>
    </div>
  </div>
);

export default Header;
