import React from 'react';
import './Header.css';

const headerInfo = {
  title: 'HackDay III',
  date: 'October 5, 2019',
  location: 'Sarner Underground',
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
