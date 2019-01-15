import React from 'react';

const Pledges = props => {
  return (
    <div>
      <h2>${props.amountPledged}</h2>
      <p>pledged of ${props.goal} goal</p>
    </div>
  );
};

export default Pledges;