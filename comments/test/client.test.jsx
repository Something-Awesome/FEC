// test:
// AJAX request on click
// expand text box

import React from "react";
import { mount, render, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../client/components/app";
import CommentGroup from "../client/components/commentGroup";
// import Comment from "../client/components/comment";
import Reply from "../client/components/reply";
import FaqBox from "../client/components/faqBox";
import InputTextBox from "../client/components/inputTextBox";
import $ from "jquery";
import faker from "faker";

configure({
  adapter: new Adapter()
});

test("Should call componentDidMount", () => {
  const spy = jest.spyOn(App.prototype, "componentDidMount");
  const wrapper = mount(<App />);
  wrapper.instance().componentDidMount();
  expect(spy).toHaveBeenCalled();
});

test("Reply component contains avatar and time", () => {
  const component = shallow(<Reply />);
  expect(component.find(".avatar")).toBeDefined();
  expect(component.find(".timeBlock")).toBeDefined();
});

test("FAQ box component contains faq link", () => {
  const component = shallow(<FaqBox />);
  expect(component.find(".faqBox")).toBeDefined();
  expect(component.find("#link")).toBeDefined();
});

// test("InputTextBox component contains textarea tag", () => {
//   const component = shallow(<InputTextBox />);
//   const props =

//   expect(
//     component.contains(
//       <textarea
//         className="inputCommentBox"
//         value={props.inputValue}
//         onChange={props.handleChange}
//       />
//     )
//   ).toBeTruthy();
// });

// test("InputTextBox component contains submit button", () => {
//   const component = shallow(<InputTextBox />);
//   expect(component.find(<buttn>tss</buttn>)).toBeDefined();
// });
