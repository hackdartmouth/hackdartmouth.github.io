import React from 'react';
import './Seperator.css';
import ScrollableAnchor from 'react-scrollable-anchor';

const Seperator = ({ id }) => (
  <ScrollableAnchor id={id}>
    <div className="seperator" />
  </ScrollableAnchor>
);

export default Seperator;
