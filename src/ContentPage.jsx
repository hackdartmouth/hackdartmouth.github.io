import React from 'react';
import PropTypes from 'prop-types';
import './ContentPage.css';
// import AboutBody from './AboutBody';

const ContentPage = ({
  title, bodyContent, bodyComponent, backgroundImg,
}) => (
  <div className="pageContainer">
    <img className="backgroundImg" src={require(`./img/${backgroundImg}`)} alt="Background" />
    <div className="pageText">
      <p className="pageTitle">{title}</p>
      <bodyComponent bodyContent={bodyContent} />
    </div>
  </div>
);

ContentPage.propTypes = {
  title: PropTypes.string.isRequired,
  bodyContent: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  bodyComponent: PropTypes.object.isRequired,
  backgroundImg: PropTypes.string.isRequired,

};
export default ContentPage;
