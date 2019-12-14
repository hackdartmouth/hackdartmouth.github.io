import React from 'react';
import PropTypes from 'prop-types';
import './FAQBody.css';

// generate function-style blocks for QA
function styleFuncBlock(title, text) {
  return (
    <div className="Code">
      <h3 className="QATitle">
        <span className="keyword">func </span>
        <span className="function">{title.toLowerCase().replace(/ /g, "_")}</span>
        <span className="syntax">() {String.fromCharCode(123)}</span>
      </h3>
      <p className="QAText">{text}</p>
      <p className="syntax">{String.fromCharCode(125)}</p>
    </div>
  )
}

const FAQBody = ({ bodyContent }) => (
  <div className="gridContainer">
    {bodyContent.map(QA => (
      <div id="QABlock">
        {styleFuncBlock(QA.title, QA.text)}
      </div>
    ))}
  </div>
);
FAQBody.propTypes = {
  bodyContent: PropTypes.shape({
    col1: PropTypes.array.isRequired,
    col2: PropTypes.array.isRequired,
  }).isRequired,
};

export default FAQBody;
