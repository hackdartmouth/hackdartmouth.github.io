import React from 'react';
import './PipeBoi.css';
import PropTypes from 'prop-types';

const PipeBoi = ({ top, left, flipped, darkBackground}) => (
  <img src={require("./img/pages/pipeBoi.svg")} className={`pipe ${top? "top":"bottom"} ${left? "left":"right"} ${flipped? (top?"flipped":"flippedBoth"):""} ${darkBackground?"darkBackground":""}`}/>
);

PipeBoi.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  top: PropTypes.bool.isRequired,
  left: PropTypes.bool.isRequired,
  flipped: PropTypes.bool.isRequired
};
export default PipeBoi;
