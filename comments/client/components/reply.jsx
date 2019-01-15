import React, { Component } from "react";

const Reply = props => {
  return (
    <div
      className={`reply-${props.replyId}`}
      style={{
        backgroundColor: "#FFFFFF",
        padding: "15px",
        borderColor: "rgb(232, 232, 232)",
        borderStyle: "solid",
        borderWidth: "1px"
      }}
    >
      <img src={props.avatar} className="avatar" />
      <span>{props.user}</span>
      <div className="timeBlock">{props.createdAt}</div>
      <div style={{ lineHeight: "2.4rem" }}>{props.reply}</div>
    </div>
  );
};

export default Reply;
