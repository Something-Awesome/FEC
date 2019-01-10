import React from 'react';
import ReactDOM from 'react-dom';
import pledges from './sampleData';
import Moment from 'moment';
import $ from 'jquery';

import AllOrNothing from './components/AllOrNothing.jsx';
import Backers from './components/Backers.jsx';
import Pledged from './components/Pledged.jsx';
import BackThisProject from './components/BackThisProject.jsx';
import RemindMe from './components/RemindMe.jsx';
import ShortLink from './components/ShortLink.jsx';
import SocialMedia from './components/SocialMedia.jsx';
import TimeLeft from './components/TimeLeft.jsx';
import { get } from 'http';
class PledgeTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: 50000,
      amountPledged: 0,
      backers: 0,
      daysLeft: Moment().to('20190423', true),
      projectEnd: '20190423',
      projectEndPretty: 'April 23, 2019',
      urlEndpoint: 'http://localhost123/pledgeTracker'
    };
  }

  componentDidMount() {
    this.checkPledges = setInterval(
      () => this.getPledges(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.getPledges);
  }

  getPledges () {
    $.ajax({
      method: 'GET',
      url: '/pledgeTracker',
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
      <div>
        <Pledged amountPledged={this.state.amountPledged} goal={this.state.goal} />
        <Backers backers={this.state.backers} />
        <TimeLeft daysLeft={this.state.daysLeft} />
        <BackThisProject />
        <div>
          <RemindMe />
          <SocialMedia />
          <ShortLink />
        </div>
        <div>
          <ahref>All or nothing.</ahref>
          <AllOrNothing projectEnd={this.state.projectEndPretty}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<PledgeTracker />, document.getElementById('root'));
