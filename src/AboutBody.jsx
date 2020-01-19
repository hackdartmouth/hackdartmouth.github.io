import React from 'react';
import './AboutBody.css';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import Countdown from 'react-countdown';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <h1 style={{ color: '#50514c' }}>
        HackDartmouthVI is underway!
      </h1>
    );
  } else {
    var timeRemaining = 'HackDartmouth VI starts in';
    if (days > 0) {
      timeRemaining += ` ${days} day${days > 1 ? 's' : ''}, ${hours} hour${hours > 1 ? 's' : ''}, and ${minutes} minute${minutes > 1 ? 's' : ''}!`
    } else {
      timeRemaining += ` ${hours} hour${hours > 1 ? 's' : ''}, ${minutes} minute${minutes > 1 ? 's' : ''}, and ${seconds} second${seconds > 1 ? 's' : ''}!`;
    }

    return (
      <h1 style={{ color: '#50514c' }}>
        {timeRemaining}
      </h1>
    );
  }
};

const AboutBody = ({ bodyContent }) => (
  <div className="aboutContainer">
    {bodyContent.blurb.map(p => (
      <p className="paragraph">
        <Markdown>
          {p}
        </Markdown>
      </p>
    ))}
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
