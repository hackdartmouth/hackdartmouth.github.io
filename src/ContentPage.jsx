import React from 'react';
import PropTypes from 'prop-types';
import './ContentPage.css';
import AboutBody from './AboutBody';
import FAQBody from './FAQBody';

const ContentPage = ({
  title, dictKey, bodyContent, backgroundImg,
}) => {
  const componentDict = {
    AboutBody,
    FAQBody,
  };
  const BodyComponent = componentDict[dictKey];
  const imgSrc = require(`./img/${backgroundImg}`);

  return (
    <div className="pageContainer">
      <img className="backgroundImg" src={imgSrc} alt="Background" />
      <div className="pageText">
        <p className="pageTitle">{title}</p>
        <BodyComponent bodyContent={bodyContent} />
      </div>
    </div>
  );
};

ContentPage.propTypes = {
  title: PropTypes.string.isRequired,
  bodyContent: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  dictKey: PropTypes.object.isRequired,
  backgroundImg: PropTypes.string.isRequired,

};
export default ContentPage;
