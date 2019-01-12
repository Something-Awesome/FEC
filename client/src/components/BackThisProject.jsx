import React from 'react';

const clickHandler = () => {
  this.setState({
    backer: true
  });
  alert('This button takes you to a pledge page.');
};

const BackThisProject = props => {
  { if (!props.backer) {
    return (
      <div>
        <button id="notBacker" onClick={clickHandler}>Back this project</button>
      </div>
    );
  } else {
    return (
      <div>
        <button id="backer">View Pledge</button>
      </div>
    );
  }
  }
};

export default BackThisProject;