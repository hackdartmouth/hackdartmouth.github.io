import React from 'react';
import PropTypes from 'prop-types';
import './ContentPage.css';
import AboutBody from './AboutBody';
import FAQBody from './FAQBody';
import RegisterBody from './RegisterBody';
import SponsorBody from './SponsorBody';
import ScheduleBody from './ScheduleBody';
import { Link, DirectLink, Element , Events, animateScroll, scrollSpy, scroller } from 'react-scroll'
import PipeBoi from './PipeBoi';


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
  function brightnessByColor (color) {
    var color = "" + color, isHEX = color.indexOf("#") == 0, isRGB = color.indexOf("rgb") == 0;
    if (isHEX) {
      const hasFullSpec = color.length == 7;
      var m = color.substr(1).match(hasFullSpec ? /(\S{2})/g : /(\S{1})/g);
      if (m) var r = parseInt(m[0] + (hasFullSpec ? '' : m[0]), 16), g = parseInt(m[1] + (hasFullSpec ? '' : m[1]), 16), b = parseInt(m[2] + (hasFullSpec ? '' : m[2]), 16);
    }
    if (isRGB) {
      var m = color.match(/(\d+){3}/g);
      if (m) var r = m[0], g = m[1], b = m[2];
    }
    if (typeof r != "undefined") return ((r*299)+(g*587)+(b*114))/1000;
  }
  return (
    <Element name={href} className="element">
      <div className="pageContainer" style={{ backgroundColor: sectionColor }}>
      <PipeBoi top={true} left={true} flipped={Math.floor(Math.random()*2)==1|1==2} darkBackground={brightnessByColor(sectionColor)<128}/>
      <PipeBoi top={false} left={true} flipped={Math.floor(Math.random()*2)==1|1==2} darkBackground={brightnessByColor(sectionColor)<128}/>
      <PipeBoi top={true} left={false} flipped={Math.floor(Math.random()*2)==1|1==2} darkBackground={brightnessByColor(sectionColor)<128}/>
      <PipeBoi top={false} left={false} flipped={Math.floor(Math.random()*2)==1|1==2} darkBackground={brightnessByColor(sectionColor)<128}/>
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
