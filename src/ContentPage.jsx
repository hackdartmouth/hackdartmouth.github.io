import React from 'react';
import './ContentPage.css';
import AboutBody from './AboutBody';
import FAQBody from './FAQBody';

const ContentPage = ({
  title, key, bodyContent, backgroundImg,
}) => {
const componentDict = {
    "AboutBody": AboutBody,
    "FAQBody": FAQBody
}
console.log(key);
const bodyComponent = componentDict[key];
return (
  <div className="pageContainer">
    <img className="backgroundImg" src={require(`./img/${backgroundImg}`)} alt="Background" />
    <div className="pageText">
      <p className="pageTitle">{title}</p>
      <bodyComponent bodyContent={bodyContent} />
    </div>
  </div>
);
}

export default ContentPage;
