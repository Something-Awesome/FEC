import React, { Component } from "react";
import ReactDOM from "react-dom";
import CommentGroup from "./commentGroup.jsx";
import FaqBox from "./faqBox.jsx";
import InputTextBox from "./inputTextBox.jsx";
import $ from "jquery";
import faker from "faker";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],

      inputValue: "",
      currentUser: faker.internet.userName(),
      currentUserAvatar: faker.internet.avatar(),

      // reply related states
      replied: false, // use to control when to expand reply box
      replyId: "",
      replyMessage: "",
      clickedCommentId: ""
    };
    // comments
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // replies
    this.handleReply = this.handleReply.bind(this);
    this.handleReplyChange = this.handleReplyChange.bind(this);
    this.handleReplySubmit = this.handleReplySubmit.bind(this);
  }

  componentDidMount() {
    this.loadComments();
  }

  loadComments() {
    $.ajax({
      method: "GET",
      url: "http://localhost:3000/comment",
      success: data => {
        this.setState({
          comments: data
        });
      },
      error: err => {
        console.log("AJAX failed", err);
      }
    });
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleSubmit() {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/comment",
      data: {
        comment: this.state.inputValue,
        user: this.state.currentUser,
        avatar: this.state.currentUserAvatar
      },
      success: data => {
        this.loadComments();
        this.setState({
          inputValue: ""
        });
        event.preventDefault();
      },
      error: err => {
        console.log("AJAX failed", err);
      }
    });
  }

  handleReply(e) {
    event.preventDefault();
    const clickedCommentId = e.target.parentNode.className.substring(8);
    this.setState({
      replied: !this.state.replied,
      clickedCommentId: clickedCommentId
    });
  }

  handleReplyChange(e) {
    this.setState({
      replyMessage: e.target.value
    });
  }

  handleReplySubmit(e) {
    event.preventDefault();
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/reply",
      data: {
        commentId: this.state.clickedCommentId,
        reply: this.state.replyMessage,
        user: this.state.currentUser,
        avatar: this.state.currentUserAvatar
      },
      success: data => {
        console.log("AJAX REPLY success", data);
        this.setState({
          replied: !this.state.replied,
          replyMessage: "",
          replyId: data
        });
        this.loadComments();
      },
      error: err => {
        console.log("AJAX REPLY failed", err);
      }
    });
  }

  render() {
    return (
      <div className="wrapper">
        <InputTextBox
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div />
        <CommentGroup
          comments={this.state.comments}
          currentUser={this.state.currentUser}
          currentUserAvatar={this.state.currentUserAvatar}
          replied={this.state.replied}
          replyId={this.state.replyId}
          replyMessage={this.state.replyMessage}
          clickedCommentId={this.state.clickedCommentId}
          handleReply={this.handleReply}
          handleReplyChange={this.handleReplyChange}
          handleReplySubmit={this.handleReplySubmit}
        />
        <FaqBox />
      </div>
    );
  }
}

export default App;
window.App = App;