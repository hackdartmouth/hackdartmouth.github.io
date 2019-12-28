import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';
import './SponsorBody.css';

const SponsorBody = ({ bodyContent }) => {
  return (
    <Container className="sponsorContainer">
      {
        bodyContent.slice(0).reverse().map(tier => (
          <Row>
            <h3 className="tierTitle">{`${tier.sponsorTier} { ${tier.amount} }`}</h3>
            <hr className="divider" />
            {
              tier.sponsors.map(company => (
                <Col><img className="sponsorImg" src={require(`./img/sponsors/${company}`)} style={{width: `${tier.size}vw`}} alt={`company: ${tier.amount}`} /> </Col>
              )) 
            }           
          </Row>
        ))
      }
    </Container>
  );
}

SponsorBody.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bodyContent: PropTypes.array.isRequired,
};

export default SponsorBody;
