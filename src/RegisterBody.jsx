import React from 'react';
// import './Register.css';
// "https://hackdartmouth.typeform.com/to/eCsxvb"
const RegisterBody = (title, date, location, info, typeformUrl) => (
  <div>
    <h2 className="registerTitle">{title}</h2>
    <h5 className="registerSubTitle">{`${date}|${location}`}</h5>
    <p className="registerDetails">{info}</p>
  </div>
);

export default RegisterBody;
