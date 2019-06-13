import React from 'react';
import './AboutBody.css';

const AboutBody = ({ bodyContent }) => (
  <div className="pContainer">
    {bodyContent.map(p => (
      <>
        <p className="paragraph">{p}</p>
      </>
    ))}
  </div>
)
export default AboutBody;
