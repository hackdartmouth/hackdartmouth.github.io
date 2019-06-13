import React from 'react';
import './Seperator.css';
import PropTypes from 'prop-types';

const Seperator = ({ id }) => (
  <div id={id} className="seperator" />
);
Seperator.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Seperator;
