import React from 'react';
import Moment from 'moment';

const TimeLeft = props => {
  return (
    <div>
      <h4>{props.daysLeft} days to go</h4>
    </div>
  );
};

export default TimeLeft;