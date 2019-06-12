import React from 'react';
import './ContentPage.css';
import AboutBody from './AboutBody';
import FAQBody from './FAQBody';

const ContentPage = ({
  title, dictKey, bodyContent, backgroundImg, id
}) => {
const componentDict = {
    "AboutBody": AboutBody,
    "FAQBody": FAQBody
}
console.log(dictKey);
const BodyComponent = componentDict[dictKey];
return (
  <div className="pageContainer">
    <img className="backgroundImg" src={require(`./img/${backgroundImg}`)} alt="Background" />
    <div className="pageText">
      <p className="pageTitle">{title}</p>
      <BodyComponent bodyContent={bodyContent} />
    </div>
  </div>
);
}

export default ContentPage;
