import React from "react";

const InputTextBox = props => {
  return (
    <form>
      <textarea
        className="inputCommentBox"
        value={props.inputValue}
        onChange={props.handleChange}
      />
      <span>
        <button
          onClick={props.handleSubmit}
          id="submitButton"
          className="btn btn-link btn-lg"
        >
          Submit
        </button>
      </span>
    </form>
  );
};

export default InputTextBox;
