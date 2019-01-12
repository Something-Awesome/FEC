import React from "react";

const RewardDescriptionList = props => {
  return (
    <div className="pledge-reward-description">
      <div className="small-caps">Includes:</div>
      <ul>
        {props.list.map(item => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default RewardDescriptionList;
