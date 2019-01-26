import React from 'react';

const Pledges = props => {
  return (
    <div>
      <h2 style={{color: 'green'}}>${props.amountPledged}</h2>
      <p>pledged of ${props.goal} goal</p>
    </div>
  );
};

export default Pledges;