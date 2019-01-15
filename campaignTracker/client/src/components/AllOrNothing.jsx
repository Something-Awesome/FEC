import React from 'react';
import { sameLine } from '../Styles.jsx';

const clickHandler = () => {
  alert('This link leads away from the page and has not been implemented.');
};

const AllOrNothing = props => {
  return (
    <div style={sameLine}>
      <pre>
        <a href="#!" onClick={clickHandler}>All or nothing</a>
      . This project will only be funded if it reaches its goal by {props.projectEnd}</pre>
    </div>
  );
};


export default AllOrNothing;