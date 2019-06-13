import React from 'react';
import './Seperator.css';
import PropTypes from 'prop-types';
import ScrollableAnchor from 'react-scrollable-anchor';

const Seperator = ({ id }) => (
  <ScrollableAnchor id={id}>
    <div className="seperator" />
  </ScrollableAnchor>
);
Seperator.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Seperator;
