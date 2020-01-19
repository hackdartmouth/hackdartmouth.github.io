import React from 'react';
import './AboutBody.css';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

const AboutBody = ({ bodyContent }) => (
  <div className="aboutContainer">
    {bodyContent.map(p => (
      <p className="paragraph">
        <Markdown>
          {p}
        </Markdown>
      </p>
    ))}
  </div>
);

AboutBody.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bodyContent: PropTypes.array.isRequired,
};
export default AboutBody;
