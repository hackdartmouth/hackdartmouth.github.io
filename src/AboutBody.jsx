import React from 'react';
import './AboutBody.css';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import Countdown from 'react-countdown';
import { isMobile } from 'react-device-detect';

const CountdownValue = ({ value, label }) => {
  return (
    <div className={ label.length > 0 ? 'countdownElement' : '' }>
      <h1 className='countdownValue'>
        {value}
      </h1>
      <p className='countdownLabel'>
        {label}
      </p>
    </div>
  );
};

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <div className='countdown'>
        HackDartmouthVII is underway!
      </div>
    );
  } else {
    return (
      <div>
        <h1 className='countdownTitle'>
          HackDartmouth VII starts in:
        </h1>
        <div className='countdownContainer'>
          <CountdownValue value={String(days).padStart(2, '0')} label='days' />
          <CountdownValue value=':' label='' />
          <CountdownValue value={String(hours).padStart(2, '0')} label='hrs' />
          <CountdownValue value=':' label='' />
          <CountdownValue value={String(minutes).padStart(2, '0')} label='mins' />
          <CountdownValue value=':' label='' />
          <CountdownValue value={String(seconds).padStart(2, '0')} label='secs' />
        </div>
      </div>
    );
  }
};

const AboutBody = ({ bodyContent }) => (
  <div className='aboutContainer'>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5em' }}>
      <div className='aboutText'>
        {bodyContent.blurb.map(p => (
          <p className='paragraph'>
            <Markdown>
              {p}
            </Markdown>
          </p>
        ))}
      </div>
      {
        !isMobile ? <img className='img' src={require(`./img/treeBrand.png`)}/> : null
      }
    </div>
    <Countdown
      date={Date.parse(bodyContent.upcomingDate)}
      renderer={renderer}
      />
  </div>
);

AboutBody.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bodyContent: PropTypes.array.isRequired,
  upcomingDate: PropTypes.string.isRequired,
};
export default AboutBody;
