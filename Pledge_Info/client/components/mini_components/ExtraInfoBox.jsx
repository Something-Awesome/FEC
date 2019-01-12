import React from "react";
import PledgeDetail from "./PledgeDetail.jsx";

const ExtraInfoBox = props => {
  return (
    <div className="extra-info-box">
      <PledgeDetail name={"Estimated Delivery"} info={props.shipDate} />
      <PledgeDetail name={"Ships To"} info={props.shipsTo} />
    </div>
  );
};

export default ExtraInfoBox;
