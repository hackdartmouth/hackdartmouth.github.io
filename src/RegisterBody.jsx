import React from 'react';
import PropTypes from 'prop-types';
import './RegisterBody.css';
import { Button } from 'react-bootstrap';

const RegisterBody = ({ bodyContent }) => {
  const {
    event,
    date,
    location,
    info,
    typeformUrl,
  } = bodyContent;
  return (
    <div>
      <h2 className="registerTitle">{`Register for ${event}`}</h2>
      <h5 className="registerSubTitle">{`${date} | ${location}`}</h5>
      <p className="registerDetails">{info}</p>
      <Button variant="outline-light" className="registerButton">Join!</Button>
    </div>
  );
};
RegisterBody.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bodyContent: PropTypes.object.isRequired,
};

export default RegisterBody;
