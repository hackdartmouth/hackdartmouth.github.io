import React from 'react';
import './ContentPage.css';
// import AboutBody from './AboutBody';

const ContentPage = ({ title, bodyContent, backgroundImg }) => (
  <div className="pageContainer">
    <img className="backgroundImg" src={require(`./img/${backgroundImg}`)} alt="Background" />
    <div className="pageText">
      <p className="pageTitle">{title}</p>
      <this.props.bodyComponent bodyContent={bodyContent} />
    </div>
  </div>
);

export default ContentPage;
