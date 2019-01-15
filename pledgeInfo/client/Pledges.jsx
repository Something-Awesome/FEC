import React from 'react';
import ReactDOM from 'react-dom';
import Pledge from './Pledge.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pledges: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/pledges').then((res)=>{
      res.json().then((data)=>{
        data.sort((a, b)=>{ return a.amount - b.amount; });
        this.setState({pledges: data});
      });
    });
    console.log('mounted');
  }

  render() {
    return (
      <div className="App">
        {this.state.pledges.map((item)=>{ return <Pledge currency={'US$'} pledge={item} />; })}
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
//ReactDOM.render(<App />, document.getElementById("root"));

window.Pledges = App;