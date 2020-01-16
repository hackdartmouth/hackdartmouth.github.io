import React from 'react';
import PropTypes from 'prop-types';
import './ContentPage.css';
import AboutBody from './AboutBody';
import FAQBody from './FAQBody';
import RegisterBody from './RegisterBody';
import SponsorBody from './SponsorBody';
import ScheduleBody from './ScheduleBody';
import { Link, DirectLink, Element , Events, animateScroll, scrollSpy, scroller } from 'react-scroll'

function defaultTitle(title) {
  return (
    <p className='pageTitle'>{title}</p>
  )
}

const ContentPage = ({
  title, dictKey, bodyContent, sectionColor, hidden, titleColor, href
}) => {
  const componentDict = {
    AboutBody,
    FAQBody,
    RegisterBody,
    SponsorBody,
    ScheduleBody
  };
  const BodyComponent = componentDict[dictKey];

  return (
    <Element name={href} className="element">
      <div className="pageContainer" style={{ backgroundColor: sectionColor }}>
        <div className="pageContent">
          <p className="pageTitle" style={{ color: titleColor }}>{title}</p>
          <BodyComponent bodyContent={bodyContent} />
        </div>
      </div>
    </Element>
  );
};

ContentPage.propTypes = {
  title: PropTypes.string.isRequired,
  bodyContent: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  dictKey: PropTypes.object.isRequired,
  sectionColor: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
};
export default ContentPage;
