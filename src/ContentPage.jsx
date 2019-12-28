import React from 'react';
import PropTypes from 'prop-types';
import './ContentPage.css';
import AboutBody from './AboutBody';
import FAQBody from './FAQBody';
import RegisterBody from './RegisterBody';
import SponsorBody from './SponsorBody';

function defaultTitle(title) {
  return (
    <p className='pageTitle'>{title}</p>
  )
}

const ContentPage = ({
  title, dictKey, bodyContent, backgroundImg, hidden, titleColor
}) => {
  const componentDict = {
    AboutBody,
    FAQBody,
    RegisterBody,
    SponsorBody,
  };
  // const TitleComponent = componentDict[dictKey];
  const BodyComponent = componentDict[dictKey];
  const imgSrc = require(`./img/pages/${backgroundImg}`);

  return (
    <div className="pageContainer">
      <img className="backgroundImg" src={imgSrc} alt="Background" />
      <div className="pageText">
        <p className="pageTitle" style={{color: titleColor }}>{title}</p>
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
  hidden: PropTypes.bool.isRequired,
};
export default ContentPage;
