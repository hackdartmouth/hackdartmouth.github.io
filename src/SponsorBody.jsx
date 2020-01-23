import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';
import './SponsorBody.css';

const SponsorBody = ({ bodyContent }) => {
  return (
    <div className="sponsorContainer">
      {
        bodyContent.slice(0).reverse().map(tier => {
          if(tier.sponsors.length>0){
            return(
              <div class="tierContainer">
                <h1 className="tierTitle">{`{ ${tier.sponsorTier} }`}</h1>
                <hr className="divider" />
                {
                  tier.sponsors.map(company => (
                    <a href={company.link}>
                      <img className="sponsorImg" src={require(`./img/sponsors/${company.src}`)} style={{width: `${tier.size}vw`}} alt={`company: ${tier.amount}`} />
                    </a>
                    
                  )) 
                }           
              </div>
            )
          }
        })
      }
    </div>
  );
}

SponsorBody.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bodyContent: PropTypes.array.isRequired,
};

export default SponsorBody;
