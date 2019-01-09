import React from 'react';

const AllOrNothing = props => {
  return (
    <div>
      <h4>This project will only be funded if it reaches its goal by {props.projectEnd}</h4>
    </div>
  );
};

export default AllOrNothing;