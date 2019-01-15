import React from 'react';

const Backers = props => {
  return (
    <div>
      <pre>
        <h2>{props.backers}</h2>
        <p>backers</p>
      </pre>
    </div>
  );
};

export default Backers;