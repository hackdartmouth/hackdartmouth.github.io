import React from 'react';
import './AboutBody.css';
import PropTypes from 'prop-types';
import Linkify from 'react-linkify';

const AboutBody = ({ bodyContent }) => (
  <div className="aboutContainer">
    {bodyContent.map(p => (
      <Linkify>
        <p className="paragraph">{p}</p>
      </Linkify>
    ))}
  </div>
);

AboutBody.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bodyContent: PropTypes.array.isRequired,
};
export default AboutBody;
