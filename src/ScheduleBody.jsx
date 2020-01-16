import React from 'react';
import './ScheduleBody.css';
import PropTypes from 'prop-types';

const ScheduleBody = ({ bodyContent }) => (
  <>
  {
    bodyContent.map(day => (
      <div className="dayContainer">
        <p className="scheduleDay">
          {day.DayOfWeek}
          {console.log(day)}
        </p>
        {day.events.map(obj => (
          <>
            <p className="scheduleEvent">{`${obj.time} | ${obj.event}`}</p>
          </>
        ))}
      </div>
    ))
  }
  </>
  
);

ScheduleBody.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bodyContent: PropTypes.array.isRequired,
};
export default ScheduleBody;
