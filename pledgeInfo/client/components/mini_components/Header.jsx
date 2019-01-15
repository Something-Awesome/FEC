import React from "react";

const Header = props => {
  return (
    <div className="header">
      <h2>
        Pledge{" "}
        <span>
          {props.currency} {props.amount}
        </span>{" "}
        or more
      </h2>
      <h3>{props.name}</h3>
      <p className="grey-text">{props.description}</p>
    </div>
  );
};

export default Header;
