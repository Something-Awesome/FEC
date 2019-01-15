import React from "react";

const BackerInfo = props => {
  return (
    <div className="backer-info">
      {props.totalSlots !== null ? (
        <div className="red-text small-text">
          Limited ({props.totalSlots - props.numberOfBackers} left of{" "}
          {props.totalSlots})
        </div>
      ) : null}
      <div className="small-text">{props.numberOfBackers} backers</div>
    </div>
  );
};

export default BackerInfo;
