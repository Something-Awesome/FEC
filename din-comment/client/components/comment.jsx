import React from "react";
import Reply from "./reply.jsx";
import moment from "moment";

const Comment = props => {
  const comments = props.comment;
  let showReplyBox;

  const replies = props.comment.replies.map(reply => {
    return (
      <Reply
        key={reply.replyId}
        reply={reply.reply}
        user={reply.user}
        replyId={reply.replyId}
        avatar={
          reply.avatar === undefined ? props.currentUserAvator : reply.avatar
        }
        createdAt={moment(reply.createdAt).fromNow()}
      />
    );
  });

  if (
    props.replied === true &&
    (JSON.stringify(comments.commentId) === props.clickedCommentId ||
      props.clickedCommentId === comments.commentId)
  ) {
    showReplyBox = (
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
  } else {
    showReplyBox = null;
  }

  return (
    <div>
      <div
        className={`comment-${comments.commentId}`}
        style={{
          backgroundColor: "#FFFFFF",
          padding: "15px",
          borderColor: "rgb(232, 232, 232)",
          borderStyle: "solid",
          borderWidth: "1px"
        }}
      >
        <img src={comments.avatar} className="avatar" />
        <span>
          <span> {comments.user}</span>
          <br />
          <a herf={"www.google.com"}>
            <time className="timeBlock">
              {moment(comments.createdAt).fromNow()}
            </time>
          </a>
        </span>
        <p style={{ lineHeight: "2.4rem" }}>{comments.comment}</p>
        <button onClick={props.handleReply} className="btn btn-link btn-sm">
          Reply
        </button>
        {showReplyBox}
      </div>
      {replies}
    </div>
  );
};

export default Comment;
