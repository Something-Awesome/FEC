import React from "react";

const ReplyTextBox = props => {
  return (
    <div>
      <textarea
        className="replyBox"
        value={props.replyMessage}
        onChange={props.handleReplyChange}
      />
      <button
        onClick={props.handleReplySubmit}
        className="btn btn-secondary btn-sm"
      >
        Submit
      </button>
    </div>
  );
};

export default ReplyTextBox;
