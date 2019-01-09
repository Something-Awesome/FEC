import React from 'react';

const Pledges = props => {
  return (
    <div>
      <h4>${props.amountPledged} of ${props.goal}</h4>
    </div>
  );
};

export default Pledges;