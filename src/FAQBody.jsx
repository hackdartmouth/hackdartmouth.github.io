import React from 'react';
import PropTypes from 'prop-types';
import './FAQBody.css';
import { Container, Row, Col } from 'react-bootstrap';

// generate function-style blocks for QA
function styleFuncBlock(title, text) {
  return (
    <Container className="Code">
      <h3 className="QATitle">
        <span className="keyword">func </span>
        <span className="function">{title.toLowerCase().replace(/ /g, "_")}</span>
        <span className="syntax">() {String.fromCharCode(123)}</span>
      </h3>
      <p className="QAText">{text}</p>
      <p className="syntax">{String.fromCharCode(125)}</p>
    </Container>
  )
}

const FAQBody = ({ bodyContent }) => (
  <div className="colContainer">
    {/* <Row>
      <Col>
        {col1.map(QA => (
          <div>
          {styleFuncBlock(QA.title, QA.text)}
        </div>
        ))}
      </Col>
      <Col>
        {col2.map(QA => (
          <div>
            {styleFuncBlock(QA.title, QA.text)}
          </div>
        ))}
      </Col>
    </Row> */}
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
