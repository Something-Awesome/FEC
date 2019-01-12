import React from "react";

const PledgeDetail = props => {
  return (
    <div className="pledge-detail">
      <div className="detail-text small-caps">{props.name}</div>
      <div className="detail-text">{props.info}</div>
    </div>
  );
};

export default PledgeDetail;
