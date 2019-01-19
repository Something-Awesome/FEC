import React from 'react';
import ReactDOM from 'react-dom';

import Faq from './components/faq.jsx';

import Axios from 'axios';

class App extends React.Component {
  state = {
    faqs: []
  }

  componentDidMount() {
    Axios.get('http://localhost:3333/faqs')
      .then(res => {
        const data = res.data;
        this.setState({ faqs: data});
        console.log(this.state.faqs);
      })
  }

  render() {
    const { faqs } = this.state;
    return (
      <div>
        {
          faqs.map(faq => {
            return <Faq question={faq.question} answer={faq.answer} />
          })
        }
      </div>
    )
  }
}



//ReactDOM.render(<App />, document.getElementById('root'));
<<<<<<< HEAD

=======
>>>>>>> 5fb98ef6eb6acdb4f866af3421332247c3d99423
window.Faq = App;