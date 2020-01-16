import React from 'react';
import './AboutBody.css';
import PropTypes from 'prop-types';

const AboutBody = ({ bodyContent }) => (
  <div className="aboutContainer">
    {bodyContent.map(p => (
      <div>
        <p className="paragraph">{p}</p>
      </div>
    ))}
  </div>
);

AboutBody.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bodyContent: PropTypes.array.isRequired,
};
export default AboutBody;
