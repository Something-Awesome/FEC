import React from 'react';
import ReactDOM from 'react-dom';
import pledges from './sampleData';
import Moment from 'moment';
import $ from 'jquery';
import Flexbox from 'flexbox-react';

import AllOrNothing from './components/AllOrNothing.jsx';
import Backers from './components/Backers.jsx';
import Pledged from './components/Pledged.jsx';
import BackThisProject from './components/BackThisProject.jsx';
import RemindMe from './components/RemindMe.jsx';
import ShortLink from './components/ShortLink.jsx';
import SocialMedia from './components/SocialMedia.jsx';
import TimeLeft from './components/TimeLeft.jsx';
import ProgressBar from './components/ProgressBar.jsx';

import { get } from 'http';
import { sameLine } from './Styles.jsx';


class PledgeTracker extends React.Component {
  constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
    this.state = {
      backer: false,
      goal: 50000,
      databaseCall: this.getPledges(),
      amountPledged: 0,
      backers: 0,
      daysLeft: Moment().to('20190423', true),
      projectEnd: '20190423',
      projectEndPretty: 'April 23, 2019',
      urlEndpoint: 'http://localhost123/pledgeTracker'
    };
  }

  componentDidMount() {
    // this.checkPledges = setInterval(
    //   () => getPledges().addChangeListener(this.handleChange),
    //   1000
    // );
    //this.getPledges();
  }

  componentWillUnmount() {
    //getPledges().removeChangeListener(this.handleChange);
    //clearInterval(this.getPledges);
  }

  // handleChange() {
  //   this.setState({
  //     amountPledged: data.totalPledged,
  //     backers: data.totalBackers
  //   });
  // }

  getPledges () {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:1234/pledgeTracker',
      success: data => {
        console.log('data retrieval successful', data);
        this.setState({
          amountPledged: data.totalPledged,
          backers: data.totalBackers
        });
      },
      error: err => {
        console.log('error', err);
      }
    });
  }

  render() {
    return (
      <Flexbox flexDirection="row">
        <div>
          <ProgressBar amountedPledged={this.state.amountPledged} goal={this.state.goal} />
          <Pledged amountPledged={this.state.amountPledged} goal={this.state.goal} />
          <Backers backers={this.state.backers} />
          <TimeLeft daysLeft={this.state.daysLeft} />
          <BackThisProject backer={this.state.backer}/>
          <div style={sameLine}>
            <RemindMe />
            <SocialMedia />
            <ShortLink />
          </div>
          <div>
            <div>
              <pre>
              </pre>
            </div>
            <AllOrNothing projectEnd={this.state.projectEndPretty}/>
          </div>
        </div>
      </Flexbox>
    );
  }
}

// ReactDOM.render(<PledgeTracker />, document.getElementById('root'));

window.campaignTracker = PledgeTracker;
