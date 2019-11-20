import React from 'react';
import './Header.css';

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
    </div>
  </div>
);

export default Header;
