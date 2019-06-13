import React from 'react';
import './AboutBody.css';
import PropTypes from 'prop-types';

const AboutBody = ({ bodyContent }) => (
  <div className="pContainer">
    {bodyContent.map(p => (
      <>
        <p className="paragraph">{p}</p>
      </>
    ))}
  </div>
);

AboutBody.propTypes = {
  bodyContent: PropTypes.string.isRequired,
};
export default AboutBody;
