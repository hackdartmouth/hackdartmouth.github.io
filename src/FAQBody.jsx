import React from 'react';
import PropTypes from 'prop-types';
import './FAQBody.css';
import { Container, Row, Col } from 'react-bootstrap';

const FAQBody = ({ bodyContent: { col1, col2 } }) => (
  <Container className="colContainer">
    <Row>
      <Col>
        {col1.map(QA => (
          <div>
            <h3 className="QATitle">{QA.title}</h3>
            <p className="QAText">{QA.text}</p>
          </div>
        ))}
      </Col>
      <Col>
        {col2.map(QA => (
          <div>
            <h3 className="QATitle">{QA.title}</h3>
            <p className="QAText">{QA.text}</p>
          </div>
        ))}
      </Col>
    </Row>
  </Container>
);
FAQBody.propTypes = {
  bodyContent: PropTypes.shape({
    col1: PropTypes.array.isRequired,
    col2: PropTypes.array.isRequired,
  }).isRequired,
};

export default FAQBody;
