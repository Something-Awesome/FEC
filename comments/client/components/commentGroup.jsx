import React from "react";
import Comment from "./comment.jsx";

const CommentGroup = props => {
  let formatComments = props.comments.map((comment, index) => {
    return (
      <li
        key={comment.commentId}
        className="list-group-item"
        style={{
          backgroundColor: "#FBFBFA",
          borderStyle: "solid",
          borderColor: "rgb(232, 232, 232)"
        }}
      >
        <Comment
          comment={comment}
          currentUser={props.currentUser}
          currentUserAvatar={props.currentUserAvatar}
          replied={props.replied}
          replyId={props.replyId}
          replyMessage={props.replyMessage}
          clickedCommentId={props.clickedCommentId}
          handleReply={props.handleReply}
          handleReplyChange={props.handleReplyChange}
          handleReplySubmit={props.handleReplySubmit}
        />
      </li>
    );
  });
  return <ul className="list-group">{formatComments}</ul>;
};

export default CommentGroup;
