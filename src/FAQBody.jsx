import React from 'react';
import PropTypes from 'prop-types';
import './FAQBody.css';

// generate function-style blocks for QA
function styleFuncBlock(title, text) {
  return (
    <div className="code">
      <h3 className="QATitle">
        <span className="keyword">func </span>
        <span className="function">{title.toLowerCase().replace(/ /g, "_").replace("?", "")}</span>
        <span className="syntax">() {String.fromCharCode(123)}</span>
      </h3>
      <p className="QAText">{text}</p>
      <p className="syntax">{String.fromCharCode(125)}</p>
    </div>
  )
}

const FAQBody = ({ bodyContent }) => (
  <div>
    <div className="lineNumbers"></div>
    <div className="imports">
      <div className="code">
        <p>
          <span className="specialKeyword">import </span>
          <span className="specialSyntax">swag</span>
        </p>
        <p>
          <span className="specialKeyword">import </span>
          <span className="specialSyntax">hacking</span>
        </p>
        <p>
          <span className="specialKeyword">import </span>
          <span className="specialSyntax">questions</span>
        </p>
        <br></br>
      </div>
    </div>
    <div className="gridContainer">
      {bodyContent.map(QA => (
        <div id="QABlock">
          {styleFuncBlock(QA.title, QA.text)}
        </div>
      ))}
    </div>
  </div>
);
FAQBody.propTypes = {
  bodyContent: PropTypes.shape({
    col1: PropTypes.array.isRequired,
    col2: PropTypes.array.isRequired,
  }).isRequired,
};

export default FAQBody;
