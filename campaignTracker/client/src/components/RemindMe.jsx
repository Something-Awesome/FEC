import React from 'react';

const clickhandler = () => {
  alert('Campaign Saved');
};

const RemindMe = props => {
  return (
    <div>
      {console.log('remindme')}
      <button href='#' onClick={clickhandler} style={{backgroundColor: 'white'}}>Remind Me</button>
    </div>
  );
};

export default RemindMe;